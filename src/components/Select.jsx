// Select.js
import React from 'react';

const SelectBox = ({ label, placeholder, options = [] }) => {
  return (
    <div className="flex flex-col w-[15rem]">
      <label className="font-medium text-sm text-black mb-1">{label}</label>
      <select className="px-3 py-2 font-normal text-gray-600 shadow-[4px_4px_6px_rgba(0,0,0,0.1)] bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
        <option disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
