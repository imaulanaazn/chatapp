/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Convo from '../Convo';
import getCurrentUser from '../../../services/currentUser';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export default function ConvoList() {
  const [conversations, setConversations] = useState([]);
  const [userId, setUserId] = useState('');

  console.log(conversations);

  useEffect(() => {
    const payload = getCurrentUser();
    setUserId(payload.id);
  }, []);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${ROOT_URL}/conversations/private/${userId}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (userId) getConversations();
  }, [userId]);

  return (
    <div className="chat_previews overflow-y-scroll h-[calc(100vh-4rem*2)]">
      {conversations.map((convo:{_id:string, members:string[]}) => (
        <Convo key={convo._id} convo={convo} currentUser={userId} />
      ))}
    </div>
  );
}
