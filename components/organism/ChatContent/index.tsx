import React from 'react';
import { useSelector } from 'react-redux';
import ChatContentHeader from '../../molecules/ChatContentHeader';
import ChatInput from '../../molecules/ChatInput';
import RightChat from '../../molecules/RightChat';
import LeftChat from '../../molecules/LeftChat';

export default function ChatContent() {
  const {
    chatContent,
    contactInfo,
  } = useSelector((state:{section:{chatContent:boolean, contactInfo:boolean}}) => state.section);
  return (
    <div
      className={`chat__content absolute w-full h-full bg-white top-0 z-20 border-l-2 border-slate-200
      ${chatContent ? 'right-0' : '-right-full hidden sm:right-0 sm:block '} 
      ${contactInfo ? 'lg:right-[25%] lg:w-[calc(100%-25%-7%-25%)]' : 'lg:w-[calc(100%-33%-7%)]'} sm:w-3/5`}
    >
      <ChatContentHeader />
      <div className="overflow-scroll h-[calc(100vh-4rem*2)] px-5">
        <RightChat />
        <LeftChat />
        <RightChat />
        <RightChat />
        <RightChat />
        <RightChat />
        <RightChat />
        <RightChat />
        <RightChat />
      </div>
      <ChatInput />
    </div>
  );
}
