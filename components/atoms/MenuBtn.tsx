import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../../redux/slices/menuSlice';
import { SETTING, LOGOUT } from '../../redux/constant';
import { menuStateProps } from '../../services/data-types';
import { setShowedSection } from '../../redux/slices/sectionSlice';

interface MenuBtnProps{
  icon: any,
  menu: string
}

export default function MenuBtn(props:MenuBtnProps) {
  const dispatch = useDispatch();
  const { icon, menu } = props;
  const { activeMenu } = useSelector((state:{menu:menuStateProps}) => state.menu);

  function menuClicked() {
    if (menu === LOGOUT) {
      console.log('logout');
    } else if (menu === SETTING) {
      dispatch(setActiveMenu({
        isSidebarActive: false,
        activeMenu,
      }));
      dispatch(setShowedSection({ section: 'setting' }));
    } else {
      dispatch(setActiveMenu({
        isSidebarActive: false,
        activeMenu: menu,
      }));
    }
  }

  return (
    <button
      type="button"
      className="menu__btn w-12 h-12 bg-slate-200 rounded-full mx-auto my-3 flex items-center justify-center"
      onClick={() => { menuClicked(); }}
    >
      {icon}
    </button>
  );
}
