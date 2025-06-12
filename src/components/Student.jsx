import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import InputBox from './Input'
import SelectBox from './Select'

const Student = () => {
  return (
    <div className='bg-[#B0B9D0] p-10'>
      <div className='bg-white flex p-2 md:p-5'>
        <div className='flex ml-2 md:ml-57'>
          <Sidebar />
          <div className='flex flex-col gap-3'>
            <Navbar name={"Student"} />
            <div className='h-full w-full flex flex-col gap-4 rounded-md px-8 py-4 bg-[#D9D9D9]'>
              <div className='font-bold flex flex-col gap-1'>
                <h1>Add new Student</h1>
                <h1>Student Information</h1>
              </div>
              <div className='flex flex-col items-center gap-4'>
                {/* first */}
                <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16'>
                  <InputBox label={'First Name'} />
                  <InputBox label={'Last Name'} />
                  <SelectBox className="shadow-[4px_4px_6px_rgba(0,0,0,0.1)]"
                    label={'Class'}
                    placeholder={"Please select your class"}
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
                    placeholder={"Please select your section"}
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

                {/* Second */}
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16">
                  <InputBox label="Gender" />
                  <InputBox label="Date of Birth" />
                  <InputBox label="Roll" />
                  <InputBox label="Admission No" />
                </div>


                {/* Third */}
                <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16'>
                  <InputBox label={'Religion'} />
                  <InputBox label={'E-mail'} />
                  <div>
                    <span className='text-sm font-medium mb-1 text-black'>
                      Upload a student photo
                    </span>
                    <div>
                      <button className='cursor-pointer border-1 border-amber-900 text-sm rounded-md px-3 py-2 shadow-[4px_4px_6px_rgba(0,0,0,0.1)] bg-white hover:bg-amber-50'>Choose a file</button>
                    </div>
                  </div>


                </div>

                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold'>Parent Information</h1>
                  <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16'>
                    <InputBox label={"Father Name"} />
                    <InputBox label={"Mother Name"} />
                    <InputBox label={"Father Occupation"} />
                    <InputBox label={"Father Occupation"} />
                  </div>
                  <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16'>
                    <InputBox label={"Phone Number"} />
                    <InputBox label={"Nationality"} />
                    <InputBox label={"Present Address"} />
                    <InputBox label={"Permanent Address"} />
                  </div>
                  <div className='flex gap-3 cursor-pointer'>
                    <button className='bg-green-800 hover:bg-green-900 text-white p-2 rounded-sm w-22'>Save</button>
                    <button className='bg-red-800 hover:bg-red-900 text-white p-2 rounded-sm w-22'>Reset</button>
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

export default Student