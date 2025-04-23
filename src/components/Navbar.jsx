import { Bell, Mail, Search, User } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex ml-4 flex-col gap-4 w-[1200px] mt-5'>
      <div className='bg-[#D9D9D9] text-black flex h-[103px] rounded-2xl flex-row items-center justify-between p-15'>
          <div className='flex items-center gap-20'>
            <div className='text-black text-2xl font-bold'>Dasboard</div>
            <div className='bg-[#B0B9D0] w-96 h-11 flex flex-row gap-5 items-center p-4 rounded-md'>
              <Search />
              {/* <span>Search</span> */}
              <input type='text' className='w-full' placeholder='Search...' />
            </div>

          </div>
          <div className='flex gap-6'>
            <Mail />
            <Bell />
            <User />
          </div>

      </div>
      
    </div>
  )
}

export default Navbar;