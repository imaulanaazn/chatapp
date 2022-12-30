import React from 'react';
import { useSelector } from 'react-redux';
import ChatContentHeader from '../../molecules/ChatContentHeader';
import ChatInput from '../../molecules/ChatInput';
import RightChat from '../../molecules/RightChat';
import LeftChat from '../../molecules/LeftChat';

export default function ChatContent() {
  const { chatContent } = useSelector((state:{section:{chatContent:boolean}}) => state.section);
  return (
    <div className={`chat__content  w-full h-full bg-white absolute top-0 z-20 ${chatContent ? 'right-0' : '-right-full hidden'}`}>
      <ChatContentHeader />
      <div className="overflow-scroll" style={{ height: 'calc(100vh - 4rem * 2)' }}>
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
