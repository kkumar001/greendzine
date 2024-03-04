import React from 'react'

const Card = ({ id, name, dob, role }) => {
    return (
        <div key={id} className='relative z-10 sm:w-[60%] w-[100%] odd:mr-auto even:ml-auto p-3 rounded-3xl flex flex-col gap-4 bg-[#5E5E5E40] text-[#ffffff90]'>
            <div className='absolute right-2 top-2 z-20 flex justify-center items-center text-white border-2 border-[#000] rounded-full size-[32px]'>
                {id}
            </div>
            <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>EMP ID<span>:</span></span><b className='text-white'>{id}</b></p>
            </div>
            <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>Name<span>:</span></span><b className='text-white'>{name}</b></p>
            </div>
            <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>DOB<span>:</span></span><b className='text-orange-400'>{dob}</b></p>
            </div>
            <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>Role<span>:</span></span><b className='text-[#36A546]'>{role}</b></p>
            </div>
        </div>
    )
}

export default Card