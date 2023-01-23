import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { io } from 'socket.io-client';
import ChatContentHeader from '../../molecules/ChatContentHeader';
import ChatInput from '../../molecules/ChatInput';
import Chat from '../../molecules/Chat';
import getCurrentUser from '../../../services/currentUser';
import { JWTPayloadTypes } from '../../../services/data-types';

const ROOT_URL = process.env.NEXT_PUBLIC_API;
interface IArrivalMessage {
  sender:string,
  text:string,
  createdAt: number
}

interface IConvoOpen{
  members: string[]
  _id: string
}

interface Imessages{
  convoId: string,
  sender: string,
  createdAt: number,
  text: string
  _id: string
}

export default function ChatContent() {
  const socket = useRef<any>('');
  const [messages, setMessages] = useState<Imessages[]>([]);
  const [userId, setUserId] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState < IArrivalMessage | undefined >(undefined);
  const scrollRef = useRef<any>(undefined);
  const { convoOpen } = useSelector((state:{convo:{convoOpen:IConvoOpen}}) => state.convo);
  const {
    chatContent,
    contactInfo,
  } = useSelector((state:{section:{chatContent:boolean, contactInfo:boolean}}) => state.section);

  useEffect(() => {
    socket.current = io('ws://localhost:5000');
    socket.current.on('getMessage', (data:{senderId:string, text:string}) => {
      setArrivalMessage({
        sender: data?.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      if (convoOpen?.members?.includes(arrivalMessage.sender)) {
        setMessages((prev:any) => [...prev, arrivalMessage]);
      }
    }
  }, [arrivalMessage, convoOpen]);

  useEffect(() => {
    if (userId) {
      socket.current.emit('addUser', userId);
    }
    // socket.current.on('getUsers', (users) => {
    //   console.log(users);
    // });
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${ROOT_URL}/messages/${convoOpen._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (convoOpen) getMessages();
  }, [convoOpen]);

  useEffect(() => {
    const { id }:JWTPayloadTypes = getCurrentUser();
    setUserId(id);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className={`chat__content absolute w-full h-full bg-white top-0 z-20 border-l-2 border-slate-200
      ${chatContent ? 'right-0' : '-right-full hidden sm:right-0 sm:block '} 
      ${contactInfo ? 'lg:right-[25%] lg:w-[calc(100%-25%-7%-25%)]' : 'lg:w-[calc(100%-33%-7%)]'} sm:w-3/5`}
    >
      {convoOpen
        ? (
          <>
            <ChatContentHeader />
            <div className="overflow-scroll h-[calc(100vh-4rem*2)] px-5">
              {messages.map((message) => (
                <div key={message._id} ref={scrollRef}>
                  <Chat own={userId === message.sender} message={message} />
                </div>
              ))}
            </div>
            <ChatInput
              convo={convoOpen}
              sender={userId}
              messages={messages}
              setMessages={setMessages}
              socket={socket}
            />
          </>
        )
        : <h1>There is no convo yet</h1>}
    </div>
  );
}
