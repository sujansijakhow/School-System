import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InputBox from '../components/Input'
import SelectBox from '../components/Select'

const Teacher = () => {
    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex ml-2 md:ml-57'>
                    <Sidebar />
                    <div className='flex flex-col gap-3'>
                        <Navbar name={"Teacher"} />
                        <div className='w-full h-full flex flex-col gap-4 rounded-md px-8 py-4 bg-[#D9D9D9]'>
                            <div className='font-bold flex flex-col gap-1'>
                                <h1>Add new Teacher</h1>
                                <h1>Teacher Information</h1>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16'>
                                        <InputBox label={'First Name'} />
                                        <InputBox label={'Last Name'} />
                                        <SelectBox className="shadow-[4px_4px_6px_rgba(0,0,0,0.1)]"
                                            label={'Class'}
                                            placeholder={"Please select the class"}
                                            options={[
                                                { label: "1", value: "1" },
                                                { label: "2", value: "2" },
                                                { label: "3", value: "3" },
                                                { label: "4", value: "4" },
                                                { label: "5", value: "5" },
                                                { label: "6", value: "6" },
                                            ]}
                                        />
                                        <SelectBox
                                            label={'Section'}
                                            placeholder={"Please select the section"}
                                            options={[
                                                { label: "A", value: "A" },
                                                { label: "B", value: "B" },
                                                { label: "C", value: "C" },
                                                { label: "D", value: "D" },
                                                { label: "E", value: "E" },
                                                { label: "F", value: "F" },
                                            ]}
                                        />

                                    </div>

                                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16">
                                        <InputBox label="Gender" />
                                        <InputBox label="Date of Birth" />
                                        <InputBox label="ID No" />
                                        <InputBox label="Subject" />
                                    </div>
                                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16">
                                        <InputBox label="Religion" />
                                        <InputBox label="E-mail" />
                                        <InputBox label="Phone Number" />
                                        <InputBox label="Address" />
                                    </div>

                                </div>
                                <div>
                                    <div className='flex flex-col items-center md:items-start gap-4 md:gap-10'>
                                        <div className='flex flex-col mr-23 md:mr-0 gap-1'>
                                        <h1 className='font-medium text-sm'>Upload a teacher photo</h1>
                                        <input type="file" className='bg-white w-21 rounded-sm shadow-[4px_4px_6px_rgba(0,0,0,0.1)] p-2 text-sm font-medium border border-1-black hover:bg-amber-50 cursor-pointer' placeholder='Choose file' />

                                        </div>
                                        <div className='flex gap-3 mr-14 md:mr-0 cursor-pointer'>
                                            <button className='bg-green-800 hover:bg-green-900 text-white p-2 rounded-sm w-22'>Save</button>
                                            <button className='bg-red-800 hover:bg-red-900 text-white p-2 rounded-sm w-22'>Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block md:h-15'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher