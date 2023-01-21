import React from 'react';

interface ChatProps{
  own: boolean
  message: any
}

function toTime(utc:string) {
  const time = new Date(utc).toLocaleTimeString().split(':');
  return time[0].concat('.', time[1]);
}

export default function Chat(props:ChatProps) {
  const { own, message } = props;
  return (
    own ? (
      <div className="flex items-center justify-end gap-5 my-6">
        <p className="text-xs">{toTime(message.createdAt)}</p>
        <p className="max-w-sm bg-violet-300 p-2 rounded-lg text-white">{message.text}</p>
        <div className="avatar bg-slate-200 w-10 h-10 min-w-[2.5rem] hidden rounded-full overflow-hidden sm:block">
          <img src="./images/profile.jpg" alt="" />
        </div>
      </div>
    ) : (
      <div>
        <div className="flex items-center justify-start gap-5 my-6">
          <div className="avatar bg-slate-200 w-10 h-10 min-w-[2.5rem] hidden rounded-full overflow-hidden sm:block">
            <img src="./images/profile.jpg" alt="" />
          </div>
          <p className="max-w-sm bg-slate-200 p-2 rounded-lg">{message.text}</p>
          <p className="text-xs">{toTime(message.createdAt)}</p>
        </div>
      </div>
    )
  );
}
