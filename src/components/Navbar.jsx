import { Bell, Mail, Search, User } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex flex-col w-[500px] md:gap-4 md:w-[1215px]'>
      <div className='bg-[#D9D9D9] text-black flex w-full h-[60px] md:w-full md:h-[80px] rounded-2xl flex-row items-center justify-between p-4'>
        <div className='flex items-center gap-5 md:gap-20'>
          <div className='text-black text-[16px] md:text-2xl font-bold'>Dasboard</div>
          <div
            className={`bg-[#B0B9D0] md:w-96 h-11 flex flex-row gap-5 items-center p-4 rounded-md transition-all 
        ${isFocused ? "border-1 border-slate-800" : "border border-transparent"}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={-1} // Allows the div to receive focus
          >
            <Search />
            <input
              type='text'
              className='w-full outline-none bg-transparent'
              placeholder='Search...'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

        </div>
        <div className='flex gap-3 md:gap-6'>
          <Mail />
          <Bell />
          <User />
        </div>

      </div>

    </div>
  )
}

export default Navbar;