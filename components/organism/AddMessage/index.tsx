import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../../atoms/Contact';

export default function AddMessage() {
  const { newMessage } = useSelector((state:{section:{newMessage:boolean}}) => state.section);
  return (
    <div className={`bg-white absolute w-full h-full top-0 ${newMessage ? 'right-0' : '-right-full hidden'} py-8 px-10`}>
      <h1 className="font-semibold text-xl">New message</h1>
      <input type="text" className="w-full py-1 px-4 bg-slate-100 mt-5" placeholder="Search" />
      <Contact profilePic={<i className="fa-solid fa-user-group" />} name="New Group" />

      <h2>Frequently contacted</h2>
      <div className="frequently__contacted">
        <Contact profilePic={<i className="fa-solid fa-user-group" />} name="Salsa" />
        <Contact profilePic={<i className="fa-solid fa-user-group" />} name="Linen" info="Bismillah" />
      </div>

      <h2>All contacts</h2>
      <div className="all__contacts">
        <Contact profilePic={<i className="fa-solid fa-user-group" />} name="Wahyu" info="sup" />
        <Contact profilePic={<i className="fa-solid fa-user-group" />} name="Naur" info="happy" />
      </div>
    </div>
  );
}
