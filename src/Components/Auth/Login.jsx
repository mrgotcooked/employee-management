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
    // 1. The Main Background: Added bg-zinc-950 to ensure the whole screen is dark
    <div className='flex justify-center items-center h-screen w-screen bg-zinc-950'>
        
        {/* 2. The Login Card: Swapped to a dark gray background, thin border, and a soft shadow */}
        <div className='border border-zinc-800 bg-zinc-900/50 p-16 rounded-2xl shadow-2xl w-full max-w-md'>
            
            {/* Added a subtle greeting to make it feel like a real app */}
            <h2 className='text-3xl font-semibold text-zinc-100 mb-8 text-center'>
                Welcome Back
            </h2>

            <form onSubmit={submitHandler} className='flex flex-col gap-5'>
                
                {/* 3. The Inputs: Scaled down the text, added dark backgrounds, and smooth focus rings */}
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className='bg-zinc-950 border border-zinc-800 py-3 px-5 rounded-full text-lg text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-600 transition-all duration-300' 
                    type="email" 
                    placeholder='Enter your email' 
                />
                
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    className='bg-zinc-950 border border-zinc-800 py-3 px-5 rounded-full text-lg text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-600 transition-all duration-300' 
                    type="password" 
                    placeholder='Enter your password' 
                />
                
                {/* 4. The Button: Scaled to match the inputs, added hover states and a subtle shadow */}
                <button 
                    className='mt-5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-full text-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 active:scale-95'
                >
                    Log in
                </button>

            </form>
        </div>
    </div>
  )
}

export default Login