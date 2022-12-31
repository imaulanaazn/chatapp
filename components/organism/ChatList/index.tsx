import React from 'react';
import ChatHeader from '../../molecules/ChatHeader';
import SearchBar from '../../molecules/SearchBar';
import ChatPreview from '../../molecules/ChatPreview';
import AddMessage from '../../molecules/AddMessage';

export default function Chat() {
  return (
    <div className="chat w-full h-full absolute top-0 left-0 bg-white flex flex-col">
      <ChatHeader />
      <AddMessage />
      <SearchBar />
      <div className="overflow-y-scroll h-[calc(100vh-4rem*2)]">
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
      </div>
    </div>
  );
}
