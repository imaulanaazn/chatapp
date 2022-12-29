import React from 'react';
import { useSelector } from 'react-redux';
import ContactInfoHeader from '../../molecules/ContactInfoHeader';
import ContactProfile from '../../molecules/ContactProfile';
import ContactMedia from '../../molecules/ContactMedia';
import ContactHandle from '../../molecules/ContactHandle';

export default function ContactInfo() {
  const { contactInfo } = useSelector((state:{section:{contactInfo: boolean}}) => state.section);
  return (
    <div className={`contact__info ${contactInfo ? '' : 'hidden'}  w-full h-full absolute top-0 ${contactInfo ? 'right-0' : '-right-full'}  z-30 bg-white`}>
      <ContactInfoHeader />
      <ContactProfile />
      <ContactMedia />
      <ContactHandle />
    </div>
  );
}
