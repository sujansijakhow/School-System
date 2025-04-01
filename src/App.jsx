import React, {  useState } from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex '>

      <Sidebar />
      <Navbar />
    </div>
      
  )
}

export default App
