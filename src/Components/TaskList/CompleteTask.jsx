import React from 'react'

const CompleteTask = ({data}) => {
  console.log(data);
  return (
    <div className='bg-pink-400 w-70 h-full rounded-xl shrink-0 p-5'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-4 py-1 text-sm rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 font-semibold text-xl'>{data.title}</h2>
        <p className='mt-3 text-sm'>{data.description}</p>
        <div className='mt-5 flex justify-center'>
            <button className='px-4 py-2 bg-purple-700'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
