import React from "react";

const InputBox = ({ label, placeholder, type = "text", name, value, onChange }) => {
  return (
    <div className="flex flex-col w-[15rem]">
      <label htmlFor={name} className="text-sm font-medium mb-1 text-black">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 text-slate-900 bg-white outline-none rounded 
                   shadow-[4px_4px_6px_rgba(0,0,0,0.1)] focus:outline-none 
                   focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputBox;
