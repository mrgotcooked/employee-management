import React from 'react'

const Header = (props) => {
  console.log(props.changeUser)
  function handleLogout(){
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
  }
  return (
    <div className='flex justify-between '>
      <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl'> {props.data.firstName} 👋</span> </h1>
      <button onClick={handleLogout} className='bg-red-600 w-23 h-10 rounded font-semibold active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
