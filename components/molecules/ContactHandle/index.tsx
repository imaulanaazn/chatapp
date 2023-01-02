import React from 'react';

export default function ContactHandle() {
  return (
    <div className="px-5">
      <button type="button" className="notif my-4 flex items-center gap-3">
        <i className="fa-solid fa-bell text-slate-400 text-sm" />
        <p className="text-sm">Notification</p>
        <div className="switch" />
      </button>

      <button type="button" className="report my-4 flex items-center gap-3">
        <i className="fa-solid fa-circle-exclamation text-slate-400 text-sm" />
        <p className="text-sm">Report</p>
      </button>

      <button type="button" className="block my-4 flex items-center gap-3">
        <i className="fa-solid fa-phone-slash text-slate-400 text-sm" />
        <p className="text-sm">BLock</p>
      </button>

      <button type="button" className="delete my-4 flex items-center gap-3 pt-4 border-t-2 ">
        <i className="fa-solid fa-trash-can text-red-400 text-sm" />
        <p className="text-sm">Delete</p>
      </button>
    </div>
  );
}
