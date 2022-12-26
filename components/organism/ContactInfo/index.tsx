import React from 'react';
import ContactInfoHeader from '../../molecules/ContactInfoHeader';
import ContactProfile from '../../molecules/ContactProfile';
import ContactMedia from '../../molecules/ContactMedia';
import ContactHandle from '../../molecules/ContactHandle';

export default function ContactInfo() {
  return (
    <div className="contact__info hidden w-full h-full absolute top-0 -right-full z-30 bg-white">
      <ContactInfoHeader />
      <ContactProfile />
      <ContactMedia />
      <ContactHandle />
    </div>
  );
}
