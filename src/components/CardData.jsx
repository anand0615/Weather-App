import React from 'react';

const CardData = ({ title, titleData }) => {
  return (
    <div className="w-auto p-4 bg-slate-300 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="font-bold text-lg text-indigo-700">{title}</div>
      <div className="text-xl text-gray-900">{titleData}</div>
    </div>
  );
};

export default CardData;
