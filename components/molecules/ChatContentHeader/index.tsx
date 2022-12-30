import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowedSection } from '../../../redux/slices/sectionSlice';

export default function ChatContentHeader() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">
      <a href="/#" className="message__sender flex items-center gap-4" onClick={() => { dispatch(setShowedSection({ section: 'contactInfo' })); }}>
        <div className="avatar w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
          <img src="./images/profile.jpg" alt="" />
        </div>
        <h1 className="font-semibold">Nama Penerima</h1>
      </a>

      <div className="message__sender__options flex gap-10">
        <button type="button">
          <i className="fa-solid fa-video" />
        </button>
        <button type="button">
          <i className="fa-solid fa-phone" />
        </button>
        <button type="button">
          <i className="fa-solid fa-ellipsis-vertical" />
        </button>
      </div>
    </div>
  );
}
