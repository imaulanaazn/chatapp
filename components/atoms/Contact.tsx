import React, { ReactElement } from 'react';

interface ContactProps{
    profilePic: ReactElement,
    name: string,
    info?: string
}

export default function Contact(props:ContactProps) {
  const { profilePic, name, info } = props;
  return (
    <button type="button" className="contact flex items-center gap-3 my-4">
      <div className="profilePic w-11 h-11 bg-slate-200 rounded-full grid place-items-center">
        {profilePic}
      </div>
      <div className="text-left">
        <p className="text-base font-semibold leading-4">{name}</p>
        <p className="text-sm leading-4">{info}</p>
      </div>
    </button>
  );
}

Contact.defaultProps = {
  info: '',
};
