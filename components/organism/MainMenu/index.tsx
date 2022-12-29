import React from 'react';
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
  return (
    <>
      <div className={`main__menu w-20 h-full absolute top-0 bg-white z-10 -left-${isSidebarActive ? 0 : 20}`}>
        <div className="profile__thumb w-12 h-12 relative bg-slate-200 rounded-full mx-auto my-7 overflow-hidden">
          <input type="file" className="w-full h-full absolute top-0 left-0 opacity-0" />
          <img src="./images/profile.jpg" alt="" />
        </div>
        <div className="menus mb-40">
          <MenuBtn icon={<i className="fa-solid fa-folder-minus" />} menu={ARCHIVEDMESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-message" />} menu={MESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-user-group" />} menu={GROUP} />
          <MenuBtn icon={<i className="fa-solid fa-star" />} menu={STARREDMESSAGE} />
          <MenuBtn icon={<i className="fa-solid fa-gear" />} menu={SETTING} />
        </div>
        <div className="logout">
          <MenuBtn icon={<i className="fa-solid fa-arrow-right-from-bracket" />} menu={LOGOUT} />
        </div>
      </div>
      <div
        className={`backdrop w-full h-full bg-slate-100 absolute z-[5] opacity-0 ${isSidebarActive ? '' : 'hidden'}`}
        onClick={() => dispatch(setMenuStatus({ isSidebarActive: !isSidebarActive }))}
      />
    </>
  );
}
