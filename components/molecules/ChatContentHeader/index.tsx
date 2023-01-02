import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowedSection } from '../../../redux/slices/sectionSlice';

export default function ChatContentHeader() {
  const dispatch = useDispatch();
  const [optionVisible, setOptionVisible] = useState(false);

  return (
    <>
      <ul className={`message__sender__option z-20 bg-slate-200 absolute top-16 right-0 rounded-md ${optionVisible ? '' : 'hidden'}`}>
        <a href="/#" className="w-full h-full" onClick={() => { setOptionVisible(false); }}><li className="py-2 px-4">Search</li></a>
        <a href="/#" className="w-full h-full" onClick={() => { setOptionVisible(false); }}><li className="py-2 px-4">Mute notification</li></a>
        <a href="/#" className="w-full h-full" onClick={() => { setOptionVisible(false); }}><li className="py-2 px-4">Report</li></a>
        <a href="/#" className="w-full h-full" onClick={() => { setOptionVisible(false); }}><li className="py-2 px-4">Block</li></a>
        <a href="/#" className="w-full h-full" onClick={() => { setOptionVisible(false); }}><li className="py-2 px-4">Clear chat</li></a>
      </ul>

      <div className={`backdrop absolute w-full h-full opacity-0 top-0 left-0 z-10 ${optionVisible ? '' : 'hidden'}`} onClick={() => { setOptionVisible(false); }} />

      <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">

        <i className="fa-solid fa-chevron-left" onClick={() => { dispatch(setShowedSection({ section: 'chatContent', value: false })); }} />

        <a href="/#" className="message__sender flex items-center gap-4" onClick={() => { dispatch(setShowedSection({ section: 'contactInfo' })); }}>
          <div className="avatar w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
            <img src="./images/profile.jpg" alt="" />
          </div>
          <h1 className="font-semibold">Nama Penerima</h1>
        </a>

        <div className="message__sender__options flex gap-8">
          <button type="button" onClick={() => {}}>
            <i className="fa-solid fa-video" />
          </button>
          <button type="button" onClick={() => {}}>
            <i className="fa-solid fa-phone" />
          </button>
          <button type="button" onClick={() => { setOptionVisible(true); }}>
            <i className="fa-solid fa-ellipsis-vertical" />
          </button>
        </div>
      </div>
    </>
  );
}
