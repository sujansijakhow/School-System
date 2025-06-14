import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Class = () => {

    const students = [
        { name: 'Anna Tamang', id: '201', class: '5th Class', percentage: '96%' },
        { name: 'Anna Tamang', id: '201', class: '5th Class', percentage: '96%' },
        { name: 'Anna Tamang', id: '201', class: '5th Class', percentage: '96%' },
        { name: 'Anna Tamang', id: '201', class: '5th Class', percentage: '96%' },
        { name: 'Anna Tamang', id: '201', class: '5th Class', percentage: '96%' },
    ];


    return (
        <div className='bg-[#B0B9D0] p-10 w-full'>
            <div className='bg-white flex p-2 md:p-5 w-full'>
                <div className='flex ml-2 md:ml-50 w-full'>
                    <Sidebar />
                    <div className='flex flex-col gap-3'>
                        <Navbar name={"Class"} />
                        <div className='w-full p-4 bg-[#D9D9D9] h-94'>
                            <div className='flex text-sm font-semibold'>
                                <p className='w-10'>ID</p>
                                <p className='w-13'>Photo</p>
                                <p className='w-22'>Class Name</p>
                                <p className='w-26'>Teacher Name</p>
                                <p className='w-17'>Gender</p>
                                <p className='w-17'>Subject</p>
                                <p className='w-15'>Class</p>
                                <p className='w-17'>Section</p>
                                <p className='w-20'>Date</p>
                                <p className='w-20'>Time</p>
                                <p className='w-30'>Mobile Number</p>
                                <p className='w-44'>Email</p>
                                <p className='w-20'>Action</p>
                            </div>
                            {students.map((student, idx) => {
                                return (
                                    <div key={idx}
                                     className='flex text-sm font-normal'>
                                        <p className='w-10'> {student.id}</p>
                                        <p className='w-13'></p>
                                        <p className='w-22'></p>
                                        <p className='w-26'></p>
                                        <p className='w-17'></p>
                                        <p className='w-17'></p>
                                        <p className='w-15'></p>
                                        <p className='w-17'></p>
                                        <p className='w-20'></p>
                                        <p className='w-20'></p>
                                        <p className='w-30'></p>
                                        <p className='w-44'></p>
                                        <p className='w-20'></p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Class