import React from 'react';

export default function ChatInput() {
  return (
    <div className="w-full h-16 px-5 border-t-2 flex items-center justify-between gap-5 absolute bottom-0 left-0">
      <button type="button">
        <i className="fa-solid fa-paperclip" />
      </button>

      <div className="input__field flex flex-1">
        <input type="text" className="bg-slate-100 flex-1 py-2 px-3" placeholder="Write a message..." />
        <button type="button" className="send__btn bg-slate-100 py-2 px-3">
          <i className="fa-solid fa-paper-plane" />
        </button>
      </div>

      <button type="button" className="microphone w-10 h-10 rounded-full flex items-center justify-center bg-violet-400 ">
        <i className="fa-solid fa-microphone text-white" />
      </button>
    </div>
  );
}
