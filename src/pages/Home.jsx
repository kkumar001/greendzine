import React from 'react'
import { Navbar, ProductivityDetails } from '../components'
import { grp46, moptro } from '../assets'

const Home = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col-reverse gap-4'>
      <Navbar />
      <div className='h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 w-full p-2'>
        <div className='w-[90%] flex justify-end max-w-[800px]'>
          <img src={grp46} alt="call" className='size-[40px]' />
        </div>
        <div className='relative z-10 flex -mt-6'>
          <img src={moptro} alt="moptro" className='size-[70px]' />
          <div
            className="absolute z-20 bg-[#5E5E5E40] rounded-full size-[36px] left-[65px] -top-[14px] flex justify-center items-center text-[#36A546] text-sm"
            style={{
              border: '1px solid #FFFEFE00'
            }}
          >
            4
          </div>
        </div>
        <div className='w-[90%] flex flex-col items-center gap-2 max-w-[800px] mt-[10px] bg-[#5E5E5E40] rounded-[26px]'
          style={{
            boxShadow: 'box-shadow: inset 0px 4px 0px #00000040'
          }}
        >
          <div className='w-full p-4 bg-[#1A2C2C] text-center text-[#FFFFFF] rounded-full'>
            <p>Employee Productivity Dashboard</p>
          </div>
          <ProductivityDetails />
        </div>
      </div>
    </div>
  )
}

export default Home