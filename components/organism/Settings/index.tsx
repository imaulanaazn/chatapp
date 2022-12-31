import React from 'react';
import { useSelector } from 'react-redux';
import Setting from '../../molecules/Setting';

export default function Settings() {
  const { setting } = useSelector((state:{section:{setting:boolean}}) => state.section);
  return (
    <div className={`bg-white w-full h-full absolute top-0 z-20 py-3 px-5 ${setting ? 'right-0' : '-right-full hidden'}`}>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="profile flex items-center gap-4 my-5">
        <div className="profile__pic bg-slate-200 w-12 h-12 rounded-full" />
        <div className="profile__text">
          <p className="leading-5 text-lg font-medium">Irham Maulana</p>
          <p className="leading-5 text-sm">Sedang turu</p>
        </div>
      </div>

      <div className="settings">
        <Setting icon={<i className="text-lg fa-solid fa-key" />} title="Account" description="Security notifications, change number" />
        <Setting icon={<i className="text-lg fa-solid fa-lock" />} title="Privacy" description="Block contacts, disappearing messages" />
        <Setting icon={<i className="text-lg fa-solid fa-message" />} title="Chats" description="Theme, wallpapers, chat history" />
        <Setting icon={<i className="text-lg fa-solid fa-bell" />} title="Notifications" description="Message, group & call tones" />
        <Setting icon={<i className="text-lg fa-solid fa-database" />} title="Storage and data" description="Network usage, auto-download" />
        <Setting icon={<i className="text-lg fa-solid fa-globe" />} title="App language" description="English" />
        <Setting icon={<i className="text-lg fa-solid fa-circle-question" />} title="Help" description="Help centre, contact us, privacy policy" />
      </div>
    </div>
  );
}
