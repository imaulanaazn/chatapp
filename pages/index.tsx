import Head from 'next/head';
import React from 'react';
import MainMenu from '../components/organism/MainMenu';
import ChatList from '../components/organism/ChatList';
import ChatContent from '../components/organism/ChatContent';
import ContactInfo from '../components/organism/ContactInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>chattapp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous" />
      </Head>
      <div className="container w-screen h-screen overflow-hidden">
        <MainMenu />
        <ChatList />
        <ChatContent />
        <ContactInfo />
      </div>
    </>
  );
}
