import React, { ReactElement } from 'react';

interface SettingProps{
    icon: ReactElement,
    title: string,
    description: string
}

export default function Setting(props:SettingProps) {
  const { icon, title, description } = props;
  return (
    <button type="button" className="setting flex items-center gap-6 ml-3 text-left">
      {icon}
      <div className="setting__text my-3">
        <p className="leading-5 text-base font-medium">{title}</p>
        <p className="leading-5 text-sm">{description}</p>
      </div>
    </button>
  );
}
