import React from 'react';
import MenuBtn from '../../atoms/MenuBtn';

export default function MainMenu() {
  return (
    <div className="main__menu">
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
  );
}
