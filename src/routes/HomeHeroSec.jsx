import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import EarningsChart from '../components/EarningChart'
import EventCalendar from '../components/EventCalendar'

const HomeHeroSec = () => {

  // Top performer Data

  const students = [
    { name: 'Anna Tamang', id: '00201', class: '5th Class', percentage: '96%' },
    { name: 'Anna Tamang', id: '00201', class: '5th Class', percentage: '96%' },
    { name: 'Anna Tamang', id: '00201', class: '5th Class', percentage: '96%' },
    { name: 'Anna Tamang', id: '00201', class: '5th Class', percentage: '96%' },
    { name: 'Anna Tamang', id: '00201', class: '5th Class', percentage: '96%' },
  ];

  return (

    <div className='bg-[#B0B9D0] p-10'>
      <div className='bg-white flex p-2 md:p-5'>
        <div className='flex'>

          <Sidebar />
          <div className='flex flex-col gap-4 ml-2 md:ml-57'>

            <Navbar name={"Dashboard"} />
            <div className='flex flex-col items-center gap-4 w-[]'>

              {/* <div className='flex gap-34'>
        <div className='w-50 h-20 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
          <p className>student</p>
        </div>
        <div className='w-50 h-20 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
          <p className>Teacher</p>
        </div>
        <div className='w-50 h-20 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
          <p className>Total Employee</p>
        </div>
        <div className='w-50 h-20 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
          <p className>Total Earning</p>
        </div>
      </div> */}
              <div className='flex flex-col items-center md:flex md:flex-row gap-4'>
                <EarningsChart />
                <EventCalendar />

              </div>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col gap-2 w-[500px] bg-[#D9D9D9] rounded-md p-4 pr-12'>
                  <h1 className='font-semibold text-[18px]'>Top Performer</h1>
                  <div className='flex gap-6'>
                    <span className='border-b-black border-b'>Week</span>
                    <span>Month</span>
                    <span>Year</span>
                  </div>
                  <div className=' flex justify-between'>
                    <span>Name</span>
                    <div className='flex gap-2'>
                      <span>Id Number</span>
                      <span>Standard</span>
                      <span>Rank</span>
                    </div>
                  </div>

                  {students.map((student, index) => {
                    return (

                      <div key={index}
                        className='flex gap-38'>

                        <span>{student.name}</span>
                        <div className='flex gap-4'>
                          <span className='flex'>Id {student.id}</span>
                          <span>{student.class}</span>
                          <span>{student.percentage}</span>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <div className='flex flex-col gap-2 w-[500px] md:w-[700px] bg-[#D9D9D9] rounded-md p-6 pr-12 text-[]'><span className='font-bold'>Notice</span>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-6'>
                      <div className='w-10 h-10 rounded-full bg-black'>

                      </div>
                      <span>School annual Sport Day</span>
                    </div>
                    <span>1 September, 2025</span>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-6'>
                      <div className='w-10 h-10 rounded-full bg-black'>

                      </div>
                      <span>School annual Sport Day</span>
                    </div>
                    <span>1 September, 2025</span>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-6'>
                      <div className='w-10 h-10 rounded-full bg-black'>

                      </div>
                      <span>School annual Sport Day</span>
                    </div>
                    <span>1 September, 2025</span>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-6'>
                      <div className='w-10 h-10 rounded-full bg-black'>

                      </div>
                      <span>School annual Sport Day</span>
                    </div>
                    <span>1 September, 2025</span>
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

export default HomeHeroSec