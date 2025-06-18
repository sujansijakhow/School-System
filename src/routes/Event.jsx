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
                        <div className='bg-[#D9D9D9] p-8 rounded-md w-full h-[525px]'>
                            <h1 className='text-[18px] font-bold'>Events</h1>
                            <div className='flex gap-10'>
                                <div className='w-full flex flex-col gap-2 items-center'>
                                    <img src="/notice1.jpg" alt="Notice 1" className='w-full rounded-md' />
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Title: </span>
                                        <span>Welcome Program</span>
                                    </div>
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Date: </span>
                                        <span>6 June 2025</span>
                                    </div>
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Venue: </span>
                                        <span>TU Ground</span>
                                    </div>
                                    

                                </div>
                                <div className='w-full flex flex-col gap-2 items-center'>
                                    <img src="/notice2.jpeg" alt="Notice 1" className='w-full rounded-md' />
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Title: </span>
                                        <span>Sports Week</span>
                                    </div>
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Date: </span>
                                        <span>10 July Onward</span>
                                    </div>
                                    <div className='text-[17px] flex space-x-1'>
                                        <span className='font-medium'>Venue: </span>
                                        <span>ABC Ground</span>
                                    </div>
                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event