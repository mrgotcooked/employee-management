import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    // 1. Layout Fix: Swapped from 'flex' to 'grid'. This ensures they are always perfectly equally sized!
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      
      {/* New Task Card: Blue Theme */}
      <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm'>
        <h2 className='text-4xl font-bold text-blue-500'>{data.taskNumber.newTask}</h2>
        <h3 className='mt-2 text-lg font-medium text-zinc-300'>New Task</h3>
      </div>

      {/* Active (Accepted) Task Card: Yellow Theme */}
      <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm'>
        <h2 className='text-4xl font-bold text-yellow-500'>{data.taskNumber.active}</h2>
        <h3 className='mt-2 text-lg font-medium text-zinc-300'>Accepted Task</h3>
      </div>

      {/* Completed Task Card: Emerald (Green) Theme */}
      <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm'>
        <h2 className='text-4xl font-bold text-emerald-500'>{data.taskNumber.completed}</h2>
        <h3 className='mt-2 text-lg font-medium text-zinc-300'>Completed Task</h3>
      </div>

      {/* Failed Task Card: Rose (Red) Theme */}
      <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm'>
        <h2 className='text-4xl font-bold text-rose-500'>{data.taskNumber.failed}</h2>
        <h3 className='mt-2 text-lg font-medium text-zinc-300'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber