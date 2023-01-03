import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ARCHIVEDMESSAGE, MESSAGE, GROUP,
} from '../../../redux/constant';
import { setMenuStatus } from '../../../redux/slices/menuSlice';
import { setShowedSection } from '../../../redux/slices/sectionSlice';
import { menuStateProps } from '../../../services/data-types';

export default function ChatHeader() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [filterClicked, setFilterClicked] = useState(false);
  const {
    isSidebarActive,
    activeMenu,
  } = useSelector((state:{menu:menuStateProps}) => state.menu);

  useEffect(() => {
    if (activeMenu === ARCHIVEDMESSAGE) {
      setTitle('Archived Message');
    } else if (activeMenu === MESSAGE) {
      setTitle('Messages');
    } else if (activeMenu === GROUP) {
      setTitle('Group');
    } else {
      setTitle('Starred Message');
    }
  }, [activeMenu]);

  return (
    <>
      <div className={`filtered__options ${filterClicked ? '' : 'hidden'} bg-slate-200 absolute z-20 rounded-md top-16 right-5`}>
        <button type="button" className="filtered__option__unread flex items-center gap-2 px-4 py-2 w-full" onClick={() => { setFilterClicked(false); }}>
          <i className="fa-regular fa-comment text-lg" />
          <p className="text-base font-medium">Unreads</p>
        </button>
        <button type="button" className="filtered__option__contacts flex items-center gap-2 px-4 py-2 w-full" onClick={() => { setFilterClicked(false); }}>
          <i className="fa-regular fa-user text-lg" />
          <p className="text-base font-medium">Contacts</p>
        </button>
        <button type="button" className="filtered__option__noncontacts flex items-center gap-2 px-4 py-2 w-full" onClick={() => { setFilterClicked(false); }}>
          <i className="fa-regular fa-user text-lg" />
          <p className="text-base font-medium">Non-contacts</p>
        </button>
      </div>

      <div className={`filter__backdrop ${filterClicked ? '' : 'hidden'} absolute w-full h-full z-10 transparent`} onClick={() => { setFilterClicked(false); }} />

      <div className="w-full h-16 px-5 flex justify-between items-center border-b-2 ">
        <button type="button" className="lg:hidden" onClick={() => { dispatch(setMenuStatus({ isSidebarActive: !isSidebarActive })); }}>
          <i className="fa-solid fa-bars" />
        </button>
        <h1 className="font-semibold flex-1 text-center ">{title}</h1>
        {activeMenu === MESSAGE
      && (
      <div className="buttons">
        <button type="button" className="add__btn mr-5" onClick={() => { dispatch(setShowedSection({ section: 'newMessage', value: true })); }}>
          <i className="fa-solid fa-plus" />
        </button>
        <button type="button" className="filter__btn" onClick={() => { setFilterClicked(true); }}>
          <i className="fa-solid fa-filter" />
        </button>
      </div>
      )}
      </div>
    </>
  );
}
