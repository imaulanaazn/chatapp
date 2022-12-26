import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuStatus } from '../../../redux/slices/menuSlice';

export default function ChatHeader() {
  const dispatch = useDispatch();
  const { isMenuActive } = useSelector((state:{menu:{isMenuActive:boolean}}) => state.menu);
  return (
    <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">
      <button type="button" onClick={() => { dispatch(setMenuStatus({ isMenuActive: !isMenuActive })); }}>
        <i className="fa-solid fa-bars" />
      </button>
      <h1 className="font-semibold">Messages</h1>
      <div className="buttons">
        <button type="button" className="add__btn mr-5">
          <i className="fa-solid fa-plus" />
        </button>
        <button type="button" className="filter__btn">
          <i className="fa-solid fa-filter" />
        </button>
      </div>
    </div>
  );
}
