import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

const ProductivityDetails = () => {
    return (
        <div className='w-full p-4 flex flex-col gap-6 my-10'>
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
    )
}

export default ProductivityDetails