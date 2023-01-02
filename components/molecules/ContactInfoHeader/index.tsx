import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowedSection } from '../../../redux/slices/sectionSlice';

export default function ContactInfoHeader() {
  const dispatch = useDispatch();
  function togglePage() {
    dispatch(setShowedSection({ section: 'contactInfo', value: false }));
    dispatch(setShowedSection({ section: 'chatContent', value: true }));
  }
  return (
    <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">
      <h1 className="font-semibold">Contact Info</h1>
      <i className="fa-solid fa-chevron-right" onClick={() => { togglePage(); }} />
    </div>
  );
}
