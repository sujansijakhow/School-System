import React from 'react'
import EarningsChart from './EarningChart'
import EventCalendar from './EventCalendar'

const HomeHeroSec = () => {
  return (
    <div className='flex flex-col gap-4 p-4 w-[]'>
        
            <div className='flex gap-34'>
                <div className='w-50 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>student</p>
                </div>
                <div className='w-50 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>Teacher</p>
                </div>
                <div className='w-50 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>Total Employee</p>
                </div>
                <div className='w-50 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>Total Earning</p>
                </div>
            </div>
        <div className='flex gap-4'>
            <EarningsChart />
            <EventCalendar />
            <div>
                    
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSec