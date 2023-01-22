/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setShowedSection } from '../../../redux/slices/sectionSlice';
import { setConvoOpen } from '../../../redux/slices/convoOpen';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

interface ConvoProps{
  convo:{
    _id: string,
    members: string[],
  }
  currentUser: string,
}

export default function Convo(props:ConvoProps) {
  const dispatch = useDispatch();
  const { convo, currentUser } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = convo.members.find((member) => member !== currentUser);
    const getFriendData = async () => {
      try {
        const res = await axios.get(`${ROOT_URL}/users?userId=${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriendData();
  }, [currentUser, convo]);

  function openConvo() {
    dispatch(setShowedSection({ section: 'chatContent', value: true }));
    dispatch(setConvoOpen({ convo }));
  }

  return (
    <button type="button" className="flex items-center gap-3 px-5 py-2" onClick={() => { openConvo(); }}>
      <div className="profile__pic w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
        <img src="./images/profile.jpg" alt="" />
      </div>
      <div className="text flex-1">
        <h2 className="message__name font-semibold text-sm text-left">{user?.username}</h2>
        <p className="message_preview text-sm text-slate-700">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="message__detail flex flex-col items-end">
        <p className="message__time text-xs text-slate-400">12.00</p>
        <p className="message__total text-xs w-5 h-5 text-white bg-violet-400 flex items-center justify-center rounded-full">4</p>
      </div>
    </button>
  );
}
