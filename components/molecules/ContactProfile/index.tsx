import React from 'react';

export default function ContactProfile() {
  return (
    <div className="text-center px-5 my-5">
      <div className="avatar w-14 h-14 bg-slate-200 rounded-full mx-auto overflow-hidden">
        <img src="./images/profile.jpg" alt="" />
      </div>
      <h2 className="font-semibold my-2">Contact Name</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eos iure totam placeat earum deleniti.
      </p>
    </div>
  );
}
