import React from 'react'

const AcceptTask = ({data}) => {
  console.log()
  return (
    <div className='bg-red-400 w-70 h-full rounded-xl shrink-0 p-5'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-4 py-1 text-sm rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 font-semibold text-xl'>{data.title}</h2>
        <p className='mt-3 text-sm'>{data.description}</p>
        <div className='flex mt-5 gap-5'>
            <button className='bg-green-500 px-2 py-1 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 px-2 py-1 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
