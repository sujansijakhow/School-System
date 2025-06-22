import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InputBox from '../components/Input'
import SelectBox from '../components/Select'

const Payment = () => {


    const payments = [
        {
            student: "Aayush Sharma",
            class: "10",
            section: "A",
            feeType: "Exam Fee",
            status: "Paid",
            dueDate: "2025-07-05",
            action: "View"
        },
        {
            student: "Nisha Karki",
            class: "9",
            section: "B",
            feeType: "Exam Fee",
            status: "Unpaid",
            dueDate: "2025-07-07",
            action: "Pay Now"
        },
        {
            student: "Ravi Gurung",
            class: "8",
            section: "C",
            feeType: "Exam Fee",
            status: "Overdue",
            dueDate: "2025-07-01",
            action: "Pay Now"
        },
        {
            student: "Sneha Bista",
            class: "10",
            section: "A",
            feeType: "Practical Fee",
            status: "Paid",
            dueDate: "2025-07-08",
            action: "View"
        },
        {
            student: "Bikash Rai",
            class: "9",
            section: "C",
            feeType: "Exam Fee",
            status: "Unpaid",
            dueDate: "2025-07-10",
            action: "Pay Now"
        },
        {
            student: "Pratiksha Lama",
            class: "8",
            section: "B",
            feeType: "Re-exam Fee",
            status: "Paid",
            dueDate: "2025-07-03",
            action: "View"
        },
        {
            student: "Samir Shrestha",
            class: "10",
            section: "D",
            feeType: "Exam Fee",
            status: "Unpaid",
            dueDate: "2025-07-09",
            action: "Pay Now"
        },
        {
            student: "Karuna Singh",
            class: "9",
            section: "A",
            feeType: "Exam Fee",
            status: "Overdue",
            dueDate: "2025-07-02",
            action: "Pay Now"
        },
        {
            student: "Sagar Tamang",
            class: "8",
            section: "C",
            feeType: "Exam Fee",
            status: "Paid",
            dueDate: "2025-07-04",
            action: "View"
        },
        {
            student: "Manisha KC",
            class: "10",
            section: "B",
            feeType: "Practical Fee",
            status: "Unpaid",
            dueDate: "2025-07-11",
            action: "Pay Now"
        }
    ];


    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex'>

                    <Sidebar />
                    <div className='flex flex-col gap-4 ml-2 md:ml-57'>

                        <Navbar name={"Payment"} />
                        <div className='flex gap-4 w-full'>

                            <div className='w-1/4 bg-[#D9D9D9] h-[525px] rounded-md flex flex-col gap-4 p-4'>
                                <h1 className='font-bold text-md'>Make Payment</h1>
                                <InputBox label={"Enter Student Name"} />
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
                                <SelectBox label={"Select Fee Type"} placeholder={"Please select fee type"}
                                    options={[
                                        { label: "Tution Fee", value: "Tution fee" },
                                        { label: "Library Fee", value: "Library" },
                                        { label: "Exam Fee", value: "Exam" },
                                    ]} />
                                <InputBox label={"Enter amount"} />
                                <button className='bg-green-800 cursor-pointer hover:bg-green-900 text-white p-2 rounded-sm w-22'>Pay</button>


                            </div>
                            <div className='bg-[#D9D9D9] w-3/4 rounded-md h-[525px] flex flex-col gap-4'>
                                <h1 className='font-bold text-[18px] px-4 pt-4'>Payment Table</h1>

                                <div className='flex flex-col gap-2'>

                                    <div className='flex text-sm font-medium px-6'>
                                        <span className='w-30'>Student</span>
                                        <span className='w-30'>Class</span>
                                        <span className='w-30'>Section</span>
                                        <span className='w-30'>Fee Type</span>
                                        <span className='w-30'>Status</span>
                                        <span className='w-30'>Due Date</span>
                                        <span className='w-30'>Action</span>

                                    </div>
                                    <div className='border-b-2'></div>

                                    {payments.map((payment, idx) => {
                                        return (
                                        <div key={idx}
                                            className='flex text-sm font-normal px-6'>
                                            <span className='w-30 font-medium'>{payment.student}</span>
                                            <span className='w-30'>{payment.class}</span>
                                            <span className='w-30'>{payment.section}</span>
                                            <span className='w-30'>{payment.feeType}</span>
                                            <span className='w-30'>{payment.status}</span>
                                            <span className='w-30'>{payment.dueDate}</span>
                                            <span className='w-30'>{payment.action}</span>

                                        </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment