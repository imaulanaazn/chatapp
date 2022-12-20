import React from 'react';

export default function ChatPreview() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 ">
      <div className="profile__pic w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
        <img src="./images/profile.jpg" alt="" />
      </div>
      <div className="text flex-1">
        <h2 className="message__name font-semibold text-sm">Nama</h2>
        <p className="message_preview text-sm text-slate-700">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="message__detail flex flex-col items-end">
        <p className="message__time text-xs text-slate-400">12.00</p>
        <p className="message__total text-xs w-5 h-5 text-white bg-violet-400 flex items-center justify-center rounded-full">4</p>
      </div>
    </div>
  );
}
