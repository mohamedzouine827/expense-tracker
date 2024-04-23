import React from 'react'
import SidaNav from './_components/SidaNav'
import DashBoardHeader from './_components/DashBoardHeader'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='fixed w-64 px-4 pt-4'>
            <div className='bg-neutral-300 rounded-xl'>
            <SidaNav />
            </div>
        </div>
    <div className='ml-64 '>
        <DashBoardHeader/>
        {children}</div>
    </div>
  )
}

export default DashboardLayout