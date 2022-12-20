import React from 'react';

export default function ContactMedia() {
  return (
    <div>
      <div className="tabs flex justify-evenly border-b w-10/12 mx-auto pb-3">
        <button type="button" className="text-sm">Image</button>
        <button type="button" className="text-sm">Document</button>
        <button type="button" className="text-sm">Link</button>
      </div>
      <div className="bg-slate-200 w-11/12 h-28 mx-auto">
        file nya disini
      </div>
    </div>
  );
}
