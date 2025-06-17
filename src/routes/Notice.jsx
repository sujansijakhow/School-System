import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { FaChevronRight } from 'react-icons/fa'

const Notice = () => {
    return (

        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex'>

                    <Sidebar />
                    <div className='flex flex-col gap-4 ml-2 md:ml-57'>

                        <Navbar name={"Notice"} />
                        <div className='w-full h-[525px] flex gap-3'>
                            <div className='bg-[#D9D9D9] flex gap-4 p-4 w-[60%] rounded -md'>
                                <div className='w-full flex flex-col gap-3'>
                                    <h1 className='text-xl font-bold'>Notice</h1>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Acadmeic Calendar for Upcoming new 10th Standards</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Practical Exams for 12th Standard along with board guidance.</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Exam routine 2025 for primary classes</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Acadmeic Calendar for Upcoming new 10th Standards</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Acadmeic Calendar for Upcoming new 10th Standards</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Acadmeic Calendar for Upcoming new 10th Standards</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <FaChevronRight size={12} />
                                        <span className='text-[17px] font-medium'>Acadmeic Calendar for Upcoming new 10th Standards</span>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#D9D9D9] h-auto w-[40%] p-4 rounded-md flex flex-col gap-4'>
                                <h1 className='font-bold text-xl'>Updates</h1>
                                <div className='flex flex-col gap-1 items-center'>
                                    <img src="/notice1.jpg" alt=" Notice 1" width={250} height={250} className='rounded-md' />
                                    <div className='flex flex-col items-center text-sm font-medium bg-amber-50 p-1 rounded-sm'>

                                        <span>Welcome back to the lecturer who went to the America</span>
                                        <span>For Techonology Exhibition.👨‍💻</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                    <img src="/notice2.jpeg" alt=" Notice 1" width={250} height={250} className='rounded-md' />
                                    <div className='flex flex-col items-center text-sm font-medium bg-amber-50 p-1 rounded-sm'>

                                        <span>Sports day is coming soon encompassing a lot of games.</span>
                                        <span>Date will out soon.🎈</span>
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

export default Notice