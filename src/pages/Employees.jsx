import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { grp46, moptro } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { employees } from '../Data/employeeData'

const Employees = () => {
  const [employee, setEmployee] = useState('');
  const [data, setData] = useState(employees);

  const handleChange = (e) => {
    setEmployee(e.target.value);
  }

  const searchEmployee = () => {
    const matchedData = data.filter((emply) => emply.name.toLowerCase().includes(employee.toLowerCase()));
    setData(matchedData);
    setEmployee('');
  }

  const handleAllData = () => {
    setData(employees);
  }



  return (
    <div className='w-full h-[100vh] flex flex-col-reverse'>
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
        <div className='flex max-w-[400px] w-[90%] bg-[#5E5E5E40] p-2 rounded-3xl'>
          <input
            type="text"
            name='Name'
            onChange={handleChange}
            placeholder='Search With Name'
            value={employee}
            className='bg-transparent p-2 text-white outline-none w-[70%]'
          />
          <button onClick={searchEmployee} className='h-full w-[30%] text-[#ffffff95]'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <button onClick={handleAllData} className='p-2 text center max-w-[400px] w-[90%] text-white bg-[#5E5E5E40] rounded-3xl hover:bg-transparent border border-[#5E5E5E40]'>All Employees</button>
        <div className='w-full flex flex-col gap-4 p-2 items-center overflow-scroll'>
          {data.map((employee) => (
            <div key={employee.id} className='relative z-10 sm:w-[60%] w-[100%] odd:mr-auto even:ml-auto p-3 rounded-3xl flex flex-col gap-4 bg-[#5E5E5E40] text-[#ffffff90]'>
              <div className='absolute right-2 top-2 z-20 flex justify-center items-center text-white border-2 border-[#000] rounded-full size-[32px]'>
                {employee.emp_id}
              </div>
              <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>EMP ID<span>:</span></span><b className='text-white'>{employee.emp_id}</b></p>
              </div>
              <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>Name<span>:</span></span><b className='text-white'>{employee.name}</b></p>
              </div>
              <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>DOB<span>:</span></span><b className='text-orange-400'>{employee.dob}</b></p>
              </div>
              <div className='w-full'>
                <p className='flex gap-4'><span className='w-[70px] flex justify-between items-center'>Role<span>:</span></span><b className='text-[#36A546]'>{employee.role}</b></p>
              </div>
            </div>
          ))}
          {data.length === 0 && <h3 className='text-[24px] text-red-500 font-medium mt-2'>No Data Found</h3>}
        </div>
      </div>
    </div>
  )
}

export default Employees