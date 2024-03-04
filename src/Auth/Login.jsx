import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { grp3 } from '../assets'
import { Outlet, Navigate } from 'react-router-dom';

var loggedIn = false;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonText, setButtonText] = useState('Login');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loggedIn = true;
        setButtonText('Logging...');
        setTimeout(() => {
            if (email === 'greendzine@gmail.com' && password === 'greendzine') {
                setError('');
                navigate('/');
                setButtonText('Login');
            } else {
                setError('Invalid email or password');
            }
        }, 2500);
    };

    return (
        <div className='w-full h-[100vh] flex  flex-col items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center w-max-[800px] w-[90%]'>
                <img src={grp3} className='h-[100px]' alt="logo" />
                <p className='text-[#36A546CC] text-[16px]'>#We are Electric</p>
            </div>
            <div className='flex flex-col items-center gap-6 justify-center w-max-[800px] w-[90%]'>
                <form action=""
                    className='max-w-[400px] w-[90%] p-4 flex flex-col gap-6'
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        placeholder='E-mail'
                        name='E-mail'
                        value={email}
                        onChange={handleEmailChange}
                        required
                        style={{
                            background: '#1F191966 0% 0% no-repeat padding-box',
                            boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947',
                        }}
                        className='rounded-full p-4 w-full text-white'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='Passward'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        style={{
                            background: '#1F191966 0% 0% no-repeat padding-box',
                            boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947',
                        }}
                        className='rounded-full p-4 w-full text-white'
                    />
                    <button
                        type='submit'
                        style={{
                            background: 'transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box',
                            border: '2px solid #8CFF0026',
                            color: '#FFFFFF8C',
                            fontSize: '16px',
                            padding: '16px'
                        }}
                        className='rounded-full'
                    >
                        {buttonText}
                    </button>
                </form>
                {error && <p className='mt-4 text-red-500'>{error}</p>}
                <p className='font-thin text-white text-center'>Use E-mail = <b className='text-green-500'>greendzine@gmail.com</b> && Password = <b className='text-green-500'>greendzine</b> for now.</p>
            </div>
        </div>
    )
}

export default Login;

export const PrivateRoutes = () => {
    return(
        loggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}
