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
    <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">
      <button type="button" onClick={() => { dispatch(setMenuStatus({ isSidebarActive: !isSidebarActive })); }}>
        <i className="fa-solid fa-bars" />
      </button>
      <h1 className="font-semibold">{title}</h1>
      {activeMenu === MESSAGE
      && (
      <div className="buttons">
        <button type="button" className="add__btn mr-5" onClick={() => { dispatch(setShowedSection({ section: 'setting' })); }}>
          <i className="fa-solid fa-plus" />
        </button>
        <button type="button" className="filter__btn">
          <i className="fa-solid fa-filter" />
        </button>
      </div>
      )}
    </div>
  );
}
