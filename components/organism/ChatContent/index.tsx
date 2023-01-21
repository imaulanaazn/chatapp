import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ChatContentHeader from '../../molecules/ChatContentHeader';
import ChatInput from '../../molecules/ChatInput';
import Chat from '../../molecules/Chat';
import getCurrentUser from '../../../services/currentUser';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export default function ChatContent() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState('');
  const { convoOpen } = useSelector((state:{convo:{convoOpen:string}}) => state.convo);
  const {
    chatContent,
    contactInfo,
  } = useSelector((state:{section:{chatContent:boolean, contactInfo:boolean}}) => state.section);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${ROOT_URL}/messages/${convoOpen}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (convoOpen) getMessages();
  }, [convoOpen]);

  useEffect(() => {
    const { id } = getCurrentUser();
    setUserId(id);
  }, []);

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
                <Chat key={message._id} own={userId === message.sender} message={message} />
              ))}
            </div>
            <ChatInput />
          </>
        )
        : <h1>There is no convo yet</h1>}
    </div>
  );
}
