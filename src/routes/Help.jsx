import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'

const Help = () => {
    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex'>

                    <Sidebar />
                    <div className='flex flex-col gap-4 ml-2 md:ml-57'>

                        <Navbar name={"Payment"} />

                        <div className='flex flex-col gap-4 p-4 rounded-md bg-[#D9D9D9] w-full h-[525px]'>
                            <div className='w-full flex flex-col gap-4'>
                                <h1 className='font-bold text-md'>Help Center</h1>

                                <div className='flex flex-col gap-2 text-[17px] w-[40%]'>
                                    <h1 className='text- font-bold'>Frequently Asked Questions</h1>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <span className='text-[17px] font-normal'>Where I can see my fee status?</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <span className='text-[17px] font-normal'>Why I can't see my exam result?</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <span className='text-[17px] font-normal'>How do I register for an event?</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <span className='text-[17px] font-normal'>How do I reset my password?</span>
                                    </div>
                                    <div className='flex items-center gap-2 pb-1 border-b border-slate-800'>
                                        <span className='text-[17px] font-normal'>Why I can't see notice? </span>
                                    </div>
                                </div>
                                <h1 className='font-bold text-sm mt-4'>Quick Help</h1>
                                <div className='flex flex-col gap-2'>

                                    <div className='flex text-[17px]'>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage credential? Click</span>
                                            <a href="#" className='text-blue-500'>Account Help</a>
                                        </div>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage Payments? Click</span>
                                            <a href="#" className='text-blue-500'>Fees & Payment</a>
                                        </div>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage Results? Click</span>
                                            <a href="#" className='text-blue-500'>Exam & Results</a>
                                        </div>
                                    </div>
                                    <div className='flex text-[17px]'>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage Notice & Events? Click</span>
                                            <a href="#" className='text-blue-500'>Events</a>
                                        </div>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage Rotuine? Click</span>
                                            <a href="#" className='text-blue-500'>Routine</a>
                                        </div>
                                        <div className='flex gap-2 w-[400px]'>
                                            <span>Manage Issues? Click</span>
                                            <a href="#" className='text-blue-500'>Issues</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-bold text-sm'>Contact Us?</h1>
                                    <div className='flex gap-46'>

                                        <div className='flex gap-1 items-center'>
                                            <FaFacebook />
                                            <a href="#" className='text-blue-500'>fb.school</a>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <FaInstagram />
                                            <a href="#" className='text-blue-500'>ig.school</a>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <FaXTwitter />
                                            <a href="#" className='text-blue-500'>X.school</a>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <FaLinkedin />
                                            <a href="#" className='text-blue-500'>ld.school</a>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <FaGlobe />
                                            <a href="#" className='text-blue-500'>school.edu.np</a>
                                        </div>
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

export default Help