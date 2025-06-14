import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SelectBox from '../components/Select';

const students = ["Anna Tamang", "Ravi Singh", "Maya Sharma"];

const Attendance = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const monthName = today.toLocaleString("default", { month: "long" });
    const totalDays = new Date(year, month + 1, 0).getDate();

    const isSaturday = (day) => {
        const date = new Date(year, month, day);
        return date.getDay() === 6;
    };

    const [attendance, setAttendance] = useState(() => {
        const initial = {};
        students.forEach(student => {
            initial[student] = {};
            for (let day = 1; day <= totalDays; day++) {
                initial[student][day] = isSaturday(day) ? "holiday" : null;
            }
        });
        return initial;
    });

    const toggleAttendance = (student, day, status) => {
        setAttendance(prev => ({
            ...prev,
            [student]: {
                ...prev[student],
                [day]: status
            }
        }));
    };

    return (
        <div className='bg-[#B0B9D0] p-10'>
            <div className='bg-white flex p-2 md:p-5'>
                <div className='flex ml-2 md:ml-50'>
                    <Sidebar />
                    <div className='flex flex-col gap-3'>
                        <Navbar name={"Attendance"} />

                        <div className='bg-[#D9D9D9] p-4 flex flex-col gap-4 rounded-md w-full'>
                            <div className='font-bold text-xl'>
                                Student Attendance
                            </div>
                            <div className='flex justify-between'>
                                <SelectBox label={"Select Class"} />
                                <SelectBox label={"Select Section"} />
                                <SelectBox label={"Select Month"} />
                                <SelectBox label={"Session Year"} />
                            </div>
                            <div>
                                <button className='rounded-sm p-1 bg-[#4e70f8]'>Search</button>
                            </div>

                        </div>
                        <div className="p-4 rounded-md bg-[#D9D9D9] h-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                Attendance Sheet - Class 6A ({monthName} {year})
                            </h2>
                            <div className="overflow-auto">
                                <table className="table-fixed border border-gray-300 w-full">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border p-2 w-20 whitespace-normal break-words text-sm">
                                                Student \ Date
                                            </th>

                                            {[...Array(totalDays)].map((_, i) => (
                                                <th key={i} className="border p-2 w-6 text-sm">{i + 1}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student, idx) => (
                                            <tr key={idx} className="text-center">
                                                <td className="border p-2 font-medium w-20 whitespace-normal break-words text-sm">
                                                    {student}
                                                </td>

                                                {[...Array(totalDays)].map((_, dayIndex) => {
                                                    const day = dayIndex + 1;
                                                    const status = attendance[student][day];

                                                    if (isSaturday(day)) {
                                                        if (idx === 0) {
                                                            return (
                                                                <td
                                                                    key={dayIndex}
                                                                    rowSpan={students.length}
                                                                    className="border p-2 bg-red-500 text-black font-bold align-middle text-xs w-10"
                                                                    style={{
                                                                        writingMode: "vertical-rl",
                                                                        transform: "rotate(180deg)",
                                                                        textAlign: "center"
                                                                    }}
                                                                >
                                                                    Saturday
                                                                </td>
                                                            );
                                                        } else {
                                                            return null;
                                                        }
                                                    }

                                                    return (
                                                        <td
                                                            key={dayIndex}
                                                            className="border w-10 h-[70px] relative text-center align-middle"
                                                        >
                                                            <div className="w-full h-full flex justify-center items-center relative">
                                                                {status === "present" && (
                                                                    <span className="font-bold text-green-600">✓</span>
                                                                )}
                                                                {status === "absent" && (
                                                                    <span className="font-bold text-red-600">✘</span>
                                                                )}
                                                                {status === null && (
                                                                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-1 bg-white bg-opacity-90 z-10 opacity-0 hover:opacity-100 transition-opacity">
                                                                        <button
                                                                            className="text-green-600 font-bold px-1 hover:bg-green-100 rounded"
                                                                            onClick={() => toggleAttendance(student, day, "present")}
                                                                        >
                                                                            ✓
                                                                        </button>
                                                                        <button
                                                                            className="text-red-600 font-bold px-1 hover:bg-red-100 rounded"
                                                                            onClick={() => toggleAttendance(student, day, "absent")}
                                                                        >
                                                                            ✘
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
