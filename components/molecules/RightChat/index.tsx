import React from 'react';

export default function RightChat() {
  return (
    <div className="flex items-center justify-end gap-5 my-6">
      <p className="text-xs">12.00</p>
      <p className="max-w-sm bg-violet-300 p-2 rounded-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est harum aliquid.</p>
      <div className="avatar bg-slate-200 w-10 h-10 min-w-[2.5rem] hidden rounded-full overflow-hidden sm:block">
        <img src="./images/profile.jpg" alt="" />
      </div>
    </div>
  );
}
