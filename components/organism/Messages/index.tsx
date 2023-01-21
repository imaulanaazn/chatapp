import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from '../../molecules/ChatHeader';
import SearchBar from '../../molecules/SearchBar';
import ConvoList from '../../molecules/ConvoList';

export default function Messages() {
  const { contactInfo } = useSelector((state:{section:{contactInfo:Boolean}}) => state.section);
  return (
    <div className={`chat w-full h-full absolute top-0 left-0 bg-white sm:w-2/5 lg:w-[33%] lg:left-[7%] ${contactInfo ? 'lg:w-[25%]' : 'lg:w-[33%]'}`}>
      <ChatHeader />
      <SearchBar />
      <ConvoList />
    </div>
  );
}
