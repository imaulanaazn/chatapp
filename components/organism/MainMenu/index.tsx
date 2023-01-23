import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import MenuBtn from '../../atoms/MenuBtn';
import { setMenuStatus } from '../../../redux/slices/menuSlice';
import {
  ARCHIVEDMESSAGE, MESSAGE, GROUP, STARREDMESSAGE, SETTING, LOGOUT,
} from '../../../redux/constant';
import { menuStateProps } from '../../../services/data-types';
import { setProfileImg, deleteProfile } from '../../../services/profile';
import getCurrentUser from '../../../services/currentUser';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export default function MainMenu() {
  const dispatch = useDispatch();
  const [viewProfile, setViewProfile] = useState(false);
  const [newProfile, setNewProfile] = useState<any>('');
  const [userId, setUserId] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [profileClicked, setProfileClicked] = useState(false);
  const { isSidebarActive } = useSelector((state:{menu:menuStateProps}) => state.menu);

  useEffect(() => {
    const userFromJwt = getCurrentUser();
    setUserId(userFromJwt.id);
  }, []);

  async function submitProfile(event:any) {
    if (userId) {
      const img = event.target.files![0];
      setImagePreview(URL.createObjectURL(img));
      const data = new FormData();
      data.append('profilePicture', img);
      const result = await setProfileImg(data, userId);
      setNewProfile(result?.data);
      setProfileClicked(false);
      event.target.value = '';
    }
  }

  useEffect(() => {
    async function getUser() {
      if (userId) {
        const result = await axios.get(`${ROOT_URL}/users?userId=${userId}`);
        setImage(result?.data?.profilePicture);
      }
    }
    getUser();
  }, [userId, newProfile]);

  async function removeProfile() {
    if (userId) {
      const result = await deleteProfile(userId);
      if (result.status === 200) {
        setImagePreview('');
        setImage('');
      }
    }
  }

  return (
    <>
      <div className={`bg-slate-200 absolute z-50 left-4 top-[calc(3rem+1.75rem+0.5rem)] w-max rounded-md flex flex-col ${profileClicked ? '' : 'hidden'} `}>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:border-0
            file:text-sm file:bg-transparent"
          onChange={(event) => { submitProfile(event); }}
        />
        <button type="button" className="py-2 px-4 text-sm text-left border-y border-slate-300" onClick={() => { setProfileClicked(false); setViewProfile(true); }}>View Profile</button>
        <button type="button" className="py-2 px-4 text-sm text-left" onClick={() => { setProfileClicked(false); removeProfile(); }}>Remove Profile</button>
      </div>

      <div className={`backdrop z-30 absolute bg-slate-200 opacity-10 w-full h-full ${profileClicked ? '' : 'hidden'}`} onClick={() => { setProfileClicked(false); }} />

      <div className={`main__menu w-20 text-center h-full absolute top-0 bg-white z-20 border-r-2 border-slate-200 ${isSidebarActive ? 'left-0' : '-left-20 lg:left-0'} lg:w-[7%]`}>
        <button type="button" className="profile__thumb w-12 h-12 bg-slate-200 rounded-full mx-auto my-7 overflow-hidden" onClick={() => { setProfileClicked(true); }}>
          {imagePreview
            ? <img className="w-full h-full object-cover" src={imagePreview} alt="upload" />
            : <img className="w-full h-full object-cover" src={image ? `${ROOT_URL}/uploads/${image}` : './images/blank_profile.jpg'} alt="" />}
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

      <div
        className={`view_profile ${viewProfile ? '' : 'hidden'} absolute top-0 left-0 w-full h-full z-50 px-20 py-10 bg-[rgb(10,10,10,0.5)]`}
      >
        <button type="button" onClick={() => setViewProfile(false)} className="text-white mb-3">Close</button>
        {imagePreview
          ? <img className="w-full h-full object-cover" src={imagePreview} alt="upload" />
          : <img className="w-full h-full object-cover" src={image ? `${ROOT_URL}/uploads/${image}` : './images/blank_profile.jpg'} alt="" />}
      </div>
    </>
  );
}
