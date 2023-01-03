import React from 'react';

export default function LeftChat() {
  return (
    <div>
      <div className="flex items-center justify-start gap-5 my-6">
        <div className="avatar bg-slate-200 w-10 h-10 min-w-[2.5rem] hidden rounded-full overflow-hidden sm:block">
          <img src="./images/profile.jpg" alt="" />
        </div>
        <p className="max-w-sm bg-slate-200 p-2 rounded-lg">Lorem ipsum dolor sit amet est harum aliquid.</p>
        <p className="text-xs">12.00</p>
      </div>
    </div>
  );
}
