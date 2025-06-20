import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InputBox from '../components/Input'
import SelectBox from '../components/Select'

const Exam = () => {

    const classExam = [
        {
            testName: "Mid-Term",
            subject: "Math",
            class: "10",
            section: "A",
            date: "2025-07-05",
            time: "10:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Unit Test 1",
            subject: "Science",
            class: "9",
            section: "B",
            date: "2025-07-07",
            time: "10:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Final Assessment",
            subject: "English",
            class: "8",
            section: "C",
            date: "2025-07-09",
            time: "08:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Unit Test 2",
            subject: "Social",
            class: "10",
            section: "A",
            date: "2025-07-11",
            time: "10:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Quiz",
            subject: "Computer",
            class: "9",
            section: "D",
            date: "2025-07-12",
            time: "08:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Weekly Test",
            subject: "Nepali",
            class: "8",
            section: "B",
            date: "2025-07-14",
            time: "10:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Class Test 1",
            subject: "Science",
            class: "9",
            section: "A",
            date: "2025-07-15",
            time: "10:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Surprise Test",
            subject: "Math",
            class: "10",
            section: "C",
            date: "2025-07-17",
            time: "08:00 AM",
            action: "View / Edit"
        },
        {
            testName: "Revision Test",
            subject: "English",
            class: "8",
            section: "D",
            date: "2025-07-18",
            time: "08:00 PM",
            action: "View / Edit"
        },
        {
            testName: "Monthly Test",
            subject: "Computer",
            class: "9",
            section: "B",
            date: "2025-07-20",
            time: "80:00 AM",
            action: "View / Edit"
        }
    ];

    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex'>

                    <Sidebar />
                    <div className='flex flex-col gap-4 ml-2 md:ml-57'>

                        <Navbar name={"Exam"} />
                        <div className='w-full bg-white flex gap-4'>
                            <div className='w-1/4 bg-[#D9D9D9] h-[525px] rounded-md flex flex-col gap-4 p-4'>
                                <h1 className='font-bold text-md'>Add new Exam</h1>
                                <InputBox label={"Enter exam"} className='w-full' />
                                <InputBox label={"Subject"} />
                                <SelectBox label={"Select Class"} placeholder={"Please select your class"}
                                    options={[
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3", value: "3" },
                                        { label: "4", value: "4" },
                                        { label: "5", value: "5" },
                                        { label: "6", value: "6" },
                                        { label: "7", value: "7" },
                                        { label: "8", value: "8" },
                                        { label: "9", value: "9" },
                                        { label: "10", value: "10" },
                                    ]} />
                                <SelectBox label={"Select Section"} placeholder={"Please select section"}
                                    options={[
                                        { label: "A", value: "A" },
                                        { label: "B", value: "B" },
                                        { label: "C", value: "C" },
                                        { label: "D", value: "D" },
                                        { label: "E", value: "E" },
                                        { label: "F", value: "F" },
                                    ]} />
                                <SelectBox label={"Select Time"} placeholder={"Please select Time"}
                                    options={[
                                        { label: "10 AM", value: "10AM" },
                                        { label: "02 AM", value: "2AM" },
                                    ]} />

                                <button className='bg-green-800 cursor-pointer hover:bg-green-900 text-white p-2 rounded-sm w-22'>Submit</button>

                            </div>
                            <div className='bg-[#D9D9D9] w-3/4 rounded-md h-[525px] flex flex-col gap-4'>
                                <h1 className='font-bold text-[18px] px-4 pt-4'>All Exam schedule</h1>

                                <div className='flex flex-col gap-2'>

                                    <div className='flex text-sm font-medium px-6'>
                                        <span className='w-30'>Class Test</span>
                                        <span className='w-30'>Subject</span>
                                        <span className='w-30'>Class</span>
                                        <span className='w-30'>Section</span>
                                        <span className='w-30'>Date</span>
                                        <span className='w-30'>Time</span>
                                        <span className='w-30'>Action</span>

                                    </div>
                                    <div className='border-b-2'></div>
                                </div>
                                {classExam.map((exam, idx) => {
                                    return (
                                        <div key={idx}
                                        className='flex text-sm font-normal px-6'>
                                            <span className='w-30'>{exam.testName}</span>
                                            <span className='w-30'>{exam.subject}</span>
                                            <span className='w-33'>{exam.class}</span>
                                            <span className='w-27'>{exam.section}</span>
                                            <span className='w-30'>{exam.date}</span>
                                            <span className='w-30'>{exam.time}</span>
                                            <span className='w-30'>{exam.action}</span>

                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exam