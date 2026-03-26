import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between '>
      <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl'> Advitya 👋</span> </h1>
      <button className='bg-red-600 w-23 h-10 rounded font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
