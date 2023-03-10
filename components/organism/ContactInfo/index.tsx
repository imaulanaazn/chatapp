import React from 'react';
import { useSelector } from 'react-redux';
import ContactInfoHeader from '../../molecules/ContactInfoHeader';
import ContactProfile from '../../molecules/ContactProfile';
import ContactMedia from '../../molecules/ContactMedia';
import ContactHandle from '../../molecules/ContactHandle';

export default function ContactInfo() {
  const { contactInfo } = useSelector((state:{section:{contactInfo: boolean}}) => state.section);
  return (
    <div className={`contact__info w-full h-full absolute top-0 border-l-2 border-slate-200 z-30 bg-white ${contactInfo ? 'right-0' : '-right-full hidden'} sm:w-3/5 lg:w-[25%]`}>
      <ContactInfoHeader />
      <ContactProfile />
      <ContactMedia />
      <ContactHandle />
    </div>
  );
}
