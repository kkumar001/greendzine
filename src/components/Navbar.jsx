import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full flex h-[64px] rounded-full p-1.5' style={{ background: 'transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box' }}>
            <NavLink to={'/'} 
            className={({isActive})=> isActive ? 'bg-[#38383880] w-[50%] h-full flex justify-center items-center text-[#36A54680] rounded-full  ' : '  w-[50%] h-full flex justify-center items-center text-[#36A54680] rounded-full '}
            >
                <FontAwesomeIcon className='size-8' icon={faHouse} />
            </NavLink>
            <NavLink to={'/allEmployees'} 
            className={({isActive})=> isActive ? 'bg-[#38383880] w-[50%] h-full flex justify-center items-center text-[#36A54680] rounded-full ' : 'w-[50%] h-full flex justify-center items-center text-[#36A54680] rounded-full '}
            >
                <FontAwesomeIcon className='size-8' icon={faUser} />
            </NavLink>
        </div>
    )
}

export default Navbar