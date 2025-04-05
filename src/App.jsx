import React, {  useState } from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-[#B0B9D0] p-10'>
      <div className='bg-white flex gap-10 p-5'>
        <div className='flex gap-10'>

          <Sidebar />
          <Navbar />
        </div>
      </div>

    </div>
      
  )
}

export default App
