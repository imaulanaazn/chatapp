import React from 'react';

export default function ChatHeader() {
  return (
    <div className="w-full h-16 px-5 flex justify-between items-center border-b-2">
      <h1 className="font-semibold">Messages</h1>
      <div className="buttons">
        <button type="button" className="add__btn mr-5">
          <i className="fa-solid fa-plus" />
        </button>
        <button type="button" className="filter__btn">
          <i className="fa-solid fa-filter" />
        </button>
      </div>
    </div>
  );
}
