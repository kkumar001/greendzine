import React from 'react'
import Navbar from '../components/Navbar'
import { grp46, moptro } from '../assets'
import ProgressBar from "@ramonak/react-progress-bar";

const Home = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col-reverse gap-4'>
      <Navbar />
      <div className='h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 w-full p-2'>
        <div className='w-[90%] flex justify-end max-w-[800px]'>
          <img src={grp46} alt="call" className='size-[40px]' />
        </div>
        <div className='w-[90%] flex justify-center max-w-[800px]'>
          <img src={moptro} alt="moptro" className='size-[70px]' />
          {/* <div
           className="absolute left-[55.5%] bg-[#5E5E5EB5] rounded-full size-[28px] flex justify-center items-center text-[#36A546] text-xs"
           style={{
            boxShadow: 'inset 0px 4px 0px #00000040',
            filter: blur('2px'),
            border: '1px solid #FFFEFE00'
           }}
        >
          4
        </div> */}
        </div>
        <div className='w-[90%] flex flex-col items-center gap-2 max-w-[800px] mt-[10px] bg-[#5E5E5E40] rounded-[26px]'
        style={{
          boxShadow: 'box-shadow: inset 0px 4px 0px #00000040'
        }}
        >
          <div className='w-full p-4 bg-[#1A2C2C] text-center text-[#FFFFFF] rounded-full'>
            <p>Employee Productivity Dashboard</p>
          </div>
          <div className='w-full p-4 flex flex-col gap-4'>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Monday</span><span className='text-[#36A546]'>4%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={4} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Tuesday</span><span className='text-[#36A546]'>92%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={92} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Wednesday</span><span className='text-[#36A546]'>122%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={122} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Thursday</span><span className='text-[#36A546]'>93%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={93} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Friday</span><span className='text-[#36A546]'>89%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={89} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-1'>
              <p className='text-white flex w-[90%] gap-2 justify-between'><span>Productivity on Saturday</span><span className='text-[#36A546]'>98%</span></p>
              <ProgressBar className='w-full' maxCompleted={200} completed={98} customLabel=' ' baseBgColor='transparent' bgColor='#36A54680' height='15px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home