import React from 'react';
import ChatContentHeader from '../../molecules/ChatContentHeader';
import ChatInput from '../../molecules/ChatInput';
import RightChat from '../../molecules/RightChat';
import LeftChat from '../../molecules/LeftChat';

export default function ChatContent() {
  return (
    <div className="chat__content hidden w-full h-full bg-white absolute top-0 z-20 -right-full">
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
