import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Event = () => {
    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex'>

                    <Sidebar />
                    <div className='flex flex-col gap-4 ml-2 md:ml-57'>

                        <Navbar name={"Event"} />
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event