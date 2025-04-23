import React from 'react'
import EarningsChart from './EarningChart'

const HomeHeroSec = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='w-[] ml-4'>
            <div className='flex justify-between  '>
                <div className='w-60 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>student</p>
                </div>
                <div className='w-60 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>student</p>
                </div>
                <div className='w-60 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>student</p>
                </div>
                <div className='w-60 h-23 rounded-md bg-[#D9D9D9] flex items-center justify-center'>
                <p className>student</p>
                </div>
            </div>
        </div>
        <div className='flex'>
            <EarningsChart />
            <div>
                    
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSec