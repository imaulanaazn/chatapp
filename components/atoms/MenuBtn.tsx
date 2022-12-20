import React from 'react';

export default function MenuBtn({ icon }:any) {
  return (
    <button type="button" className="menu__btn w-12 h-12 bg-slate-200 rounded-full mx-auto my-3 flex items-center justify-center">
      {icon}
    </button>
  );
}
