import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../../atoms/Contact';
import { setShowedSection } from '../../../redux/slices/sectionSlice';

export default function AddMessage() {
  const dispatch = useDispatch();
  const { newMessage } = useSelector((state:{section:{newMessage:boolean}}) => state.section);

  return (
    <div className={`bg-white absolute w-full h-full top-0 ${newMessage ? 'left-0' : '-right-full hidden'} py-6 px-8 sm:w-2/5 lg:w-[33%] lg:left-[7%]`}>

      <div className="add_message_header flex items-center">
        <i className="fa-solid fa-chevron-left" onClick={() => { dispatch(setShowedSection({ section: 'addMessage', value: false })); }} />
        <h1 className="font-semibold text-xl flex-1 text-center">New message</h1>
      </div>

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
