import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Class = () => {

    const students = [
        {
            id: 1,
            className: "Science",
            teacherName: "Anjali Rana",
            gender: "Female",
            subject: "Science",
            class: "6",
            section: "A",
            date: "2025-06-14",
            time: "09:00 AM",
            mobileNumber: "9841234567",
            email: "anjali.rana@example.com",
            action: "edit"
        },
        {
            id: 2,
            className: "Math",
            teacherName: "Ramesh Thapa",
            gender: "Male",
            subject: "Math",
            class: "5",
            section: "B",
            date: "2025-06-14",
            time: "10:00 AM",
            mobileNumber: "9812345678",
            email: "ramesh.t@example.com",
            action: "edit"
        },
        {
            id: 3,
            className: "English",
            teacherName: "Sita KC",
            gender: "Female",
            subject: "English",
            class: "7",
            section: "C",
            date: "2025-06-14",
            time: "11:00 AM",
            mobileNumber: "9807654321",
            email: "sita.kc@example.com",
            action: "edit"
        },
        {
            id: 4,
            photo: "photo4.jpg",
            className: "Nepali",
            teacherName: "Binod Shrestha",
            gender: "Male",
            subject: "Nepali",
            class: "6",
            section: "B",
            date: "2025-06-14",
            time: "01:00 PM",
            mobileNumber: "9865432109",
            email: "binod.sh@example.com",
            action: "edit"
        },
        {
            id: 5,
            photo: "photo5.jpg",
            className: "Science",
            teacherName: "Pratima Lama",
            gender: "Female",
            subject: "Science",
            class: "5",
            section: "A",
            date: "2025-06-14",
            time: "02:00 PM",
            mobileNumber: "9881234321",
            email: "pratima.l@example.com",
            action: "edit"
        },
        {
            id: 6,
            photo: "photo6.jpg",
            className: "Math",
            teacherName: "Kiran Basnet",
            gender: "Male",
            subject: "Math",
            class: "8",
            section: "A",
            date: "2025-06-14",
            time: "03:00 PM",
            mobileNumber: "9800000001",
            email: "kiran.b@example.com",
            action: "edit"
        },
        {
            id: 7,
            photo: "photo7.jpg",
            className: "Computer",
            teacherName: "Nisha Rai",
            gender: "Female",
            subject: "Computer",
            class: "7",
            section: "B",
            date: "2025-06-14",
            time: "08:00 AM",
            mobileNumber: "9800000002",
            email: "nisha.rai@example.com",
            action: "edit"
        },
        {
            id: 8,
            photo: "photo8.jpg",
            className: "Social",
            teacherName: "Kamal Adhikari",
            gender: "Male",
            subject: "Social",
            class: "6",
            section: "A",
            date: "2025-06-14",
            time: "10:30 AM",
            mobileNumber: "9800000003",
            email: "kamal.ad@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 9,
            photo: "photo9.jpg",
            className: "Health",
            teacherName: "Laxmi Bhatt",
            gender: "Female",
            subject: "Health",
            class: "5",
            section: "C",
            date: "2025-06-14",
            time: "12:00 PM",
            mobileNumber: "9800000004",
            email: "laxmi.b@example.com",
            action: "edit"
        },
        {
            id: 10,
            photo: "photo10.jpg",
            className: "Moral",
            teacherName: "Suraj Khadka",
            gender: "Male",
            subject: "Moral",
            class: "8",
            section: "B",
            date: "2025-06-14",
            time: "01:30 PM",
            mobileNumber: "9800000005",
            email: "suraj.k@example.com",
            action: "edit"
        }
    ];


    return (
        <div className='bg-[#B0B9D0] p-10 w-full'>
            <div className='bg-white flex p-2 md:p-5 w-full'>
                <div className='flex ml-2 md:ml-57 w-full'>
                    <Sidebar />
                    <div className='flex flex-col gap-3'>
                        <Navbar name={"Class"} />
                        <div className='w-full p-4 bg-[#D9D9D9] h-[530px] rounded-md'>
                            <div className='flex text-sm font-semibold pb-3 mb-3 border-b-2 border-black'>
                                <p className='w-6'>ID</p>
                                <p className='w-15 flex justify-center'>Photo</p>
                                <p className='w-24'>Class Name</p>
                                <p className='w-28'>Teacher Name</p>
                                <p className='w-20'>Gender</p>
                                <p className='w-20'>Subject</p>
                                <p className='w-18'>Class</p>
                                <p className='w-20'>Section</p>
                                <p className='w-22'>Date</p>
                                <p className='w-20'>Time</p>
                                <p className='w-33'>Mobile Number</p>
                                <p className='w-48'>Email</p>
                                <p className='w-20'>Action</p>
                            </div>
                            {students.map((student, idx) => {
                                return (
                                    <div key={idx}
                                        className='mb-2 flex text-sm font-normal'>
                                        <p className='w-6'> {student.id}</p>
                                        <p className='w-15 rounded-full flex justify-center items-start'><img src="/profile.png" alt="pp" className='w-5 h-5' /></p>
                                        <p className='w-24'>{student.className}</p>
                                        <p className='w-28'>{student.teacherName}</p>
                                        <p className='w-20'>{student.gender}</p>
                                        <p className='w-20'>{student.subject}</p>
                                        <p className='w-18'>{student.class}</p>
                                        <p className='w-20'>{student.section}</p>
                                        <p className='w-22'>{student.date}</p>
                                        <p className='w-22'>{student.time}</p>
                                        <p className='w-33'>{student.mobileNumber}</p>
                                        <p className='w-48'>{student.email}</p>
                                        <p className='w-20'>{student.action}</p>
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