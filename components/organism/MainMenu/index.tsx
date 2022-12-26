import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuBtn from '../../atoms/MenuBtn';
import { setMenuStatus } from '../../../redux/slices/menuSlice';

export default function MainMenu() {
  const dispatch = useDispatch();
  const { isMenuActive } = useSelector((state:{menu:{isMenuActive:boolean}}) => state.menu);

  return (
    <>
      <div className={`main__menu w-20 h-full absolute top-0 bg-white z-10 -left-${isMenuActive ? 0 : 20}`}>
        <div className="profile__thumb w-12 h-12 bg-slate-200 rounded-full mx-auto my-7 overflow-hidden">
          <img src="./images/profile.jpg" alt="" />
        </div>
        <div className="menus mb-40">
          <MenuBtn icon={<i className="fa-solid fa-folder-minus" />} />
          <MenuBtn icon={<i className="fa-solid fa-message" />} />
          <MenuBtn icon={<i className="fa-solid fa-user-group" />} />
          <MenuBtn icon={<i className="fa-solid fa-clipboard" />} />
          <MenuBtn icon={<i className="fa-solid fa-star" />} />
          <MenuBtn icon={<i className="fa-solid fa-gear" />} />
        </div>
        <div className="logout">
          <MenuBtn icon={<i className="fa-solid fa-arrow-right-from-bracket" />} />
        </div>
      </div>
      <div
        className={`backdrop w-full h-full bg-slate-100 absolute z-[5] opacity-0 ${isMenuActive ? '' : 'hidden'}`}
        onClick={() => dispatch(setMenuStatus(!isMenuActive))}
      />
    </>
  );
}
