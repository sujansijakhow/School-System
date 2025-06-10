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
            <Navbar />
            <div className='h-full w-full flex flex-col gap-6 rounded-md p-8 bg-[#D9D9D9]'>
              <div className='font-bold flex flex-col gap-1'>
                <h1>Add new Student</h1>
                <h1>Student Information</h1>
              </div>
              <div className='flex flex-col gap-10'>
                {/* first */}
                <div className='flex items-center justify-between'>
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
                <div className='flex items-center justify-between'>
                  <InputBox label={'Gender'} />
                  <InputBox label={'Date of Birth'} />
                  <InputBox label={"ID No"} />
                  <InputBox label={"Subject"} />
                </div>

                {/* Third */}
                <div className='flex items-center justify-between'>
                  <InputBox label={'Religion'} />
                  <InputBox label={'E-mail'} />
                  <InputBox label={"Phone Number"} />
                  <InputBox label={"Address"} />
                  

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