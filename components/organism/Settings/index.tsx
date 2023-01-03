import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Setting from '../../molecules/Setting';
import { setShowedSection } from '../../../redux/slices/sectionSlice';

export default function Settings() {
  const dispatch = useDispatch();
  const { setting } = useSelector((state:{section:{setting:boolean}}) => state.section);
  return (
    <div className={`bg-white w-full h-full absolute top-0 z-20 py-3 px-5 ${setting ? 'left-0' : '-right-full hidden'} sm:w-2/5 lg:w-[33%] lg:left-[7%]`}>
      <div className="add_message_header flex items-center">
        <i className="fa-solid fa-chevron-left" onClick={() => { dispatch(setShowedSection({ section: 'setting', value: false })); }} />
        <h1 className="font-semibold text-xl flex-1 text-center">New message</h1>
      </div>

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
