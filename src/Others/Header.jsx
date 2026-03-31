import React from 'react'

const Header = (props) => {
  function handleLogout(){
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
  }

  return (
    // Added 'items-end' so the button aligns with the bottom of the name
    <div className='flex items-end justify-between'>
      
      {/* Muted the 'Hello' to zinc-400, and made the Name pop with zinc-100 */}
      <h1 className='text-2xl font-medium text-zinc-400'>
        Hello <br /> 
        <span className='text-3xl font-semibold text-zinc-100'> 
          {props.data?.firstName} 👋
        </span> 
      </h1>
      
      {/* Upgraded the button with a richer rose color, hover effects, and smooth transitions */}
      <button 
        onClick={handleLogout} 
        className='bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-sm text-sm font-medium transition-colors duration-200 active:scale-95'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header