import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center h-16 px-5 w-full border-b-2">
      <input type="text" className="bg-slate-100 py-1 px-4 flex-1" placeholder="Search" />
      <button type="button" className="bg-slate-100 py-1 px-4">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  );
}
