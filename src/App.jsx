import React, {  useState } from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import HomeHeroSec from './components/HomeHeroSec'

function App() {

  return (
    <div className='bg-[#B0B9D0] p-10'>
      <div className='bg-white flex p-5'>
        <div className='flex'>

          <Sidebar />
          <div className='flex flex-col gap-10'>

            <Navbar />
            <HomeHeroSec />
          </div>
        </div>
      </div>

    </div>
      
  )
}

export default App
