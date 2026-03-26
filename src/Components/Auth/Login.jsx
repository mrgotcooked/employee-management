import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    function submitHandler(e){
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='border-2 border-emerald-500 p-20 rounded-2xl'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col'>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-2xl outline-none placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                 required className='border-2 mt-3 border-emerald-600 py-3 px-5 rounded-full text-2xl outline-none placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='text-white bg-emerald-500 border-none border-2 mt-10 py-3  rounded-full text-3xl outline-none placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
