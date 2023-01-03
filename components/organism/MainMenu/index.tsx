import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuBtn from '../../atoms/MenuBtn';
import { setMenuStatus } from '../../../redux/slices/menuSlice';
import {
  ARCHIVEDMESSAGE, MESSAGE, GROUP, STARREDMESSAGE, SETTING, LOGOUT,
} from '../../../redux/constant';
import { menuStateProps } from '../../../services/data-types';

export default function MainMenu() {
  const dispatch = useDispatch();
  const { isSidebarActive } = useSelector((state:{menu:menuStateProps}) => state.menu);
  const [profileClicked, setProfileClicked] = useState(false);

  return (
    <>
      <div className={`bg-slate-200 absolute z-50 left-4 top-[calc(3rem+1.75rem+0.5rem)] w-max rounded-md flex flex-col ${profileClicked ? '' : 'hidden'} `}>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:border-0
            file:text-sm file:bg-transparent"
          onInput={() => { setProfileClicked(false); }}
        />
        <button type="button" className="py-2 px-4 text-sm text-left border-y border-slate-300" onClick={() => { setProfileClicked(false); }}>View Profile</button>
        <button type="button" className="py-2 px-4 text-sm text-left" onClick={() => { setProfileClicked(false); }}>Remove Profile</button>
      </div>

      <div className={`backdrop z-30 absolute bg-slate-200 opacity-10 w-full h-full ${profileClicked ? '' : 'hidden'}`} onClick={() => { setProfileClicked(false); }} />

      <div className={`main__menu w-20 text-center h-full absolute top-0 bg-white z-20 ${isSidebarActive ? 'left-0' : '-left-20 lg:left-0'} lg:w-[7%]`}>
        <button type="button" className="profile__thumb w-12 h-12 bg-slate-200 rounded-full mx-auto my-7 overflow-hidden" onClick={() => { setProfileClicked(true); }}>
          <img src="./images/profile.jpg" alt="" />
        </button>

        <div className="menus mb-40 max-w-min mx-auto">
          <MenuBtn icon={<i className="fa-solid fa-folder-minus" />} menu={ARCHIVEDMESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-message" />} menu={MESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-user-group" />} menu={GROUP} />
          <MenuBtn icon={<i className="fa-solid fa-star" />} menu={STARREDMESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-gear" />} menu={SETTING} />
        </div>

        <div className="logout max-w-min mx-auto">
          <MenuBtn icon={<i className="fa-solid fa-arrow-right-from-bracket" />} menu={LOGOUT} />
        </div>
      </div>
      <div
        className={`menu__backdrop w-full h-full bg-slate-100 absolute z-10 opacity-0 ${isSidebarActive ? '' : 'hidden'}`}
        onClick={() => dispatch(setMenuStatus({ isSidebarActive: !isSidebarActive }))}
      />
    </>
  );
}
