import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 gap-10'>
      <div className=' w-[45%] bg-blue-400 rounded-xl px-10 py-5'>
        <h2 className='text-3xl'>{data.taskNumber.newTask}</h2>
        <h3 className='text-xl'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-red-400 rounded-xl px-10 py-5'>
        <h2 className='text-3xl'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl'>Completed Task</h3>
      </div>
      <div className=' w-[45%] bg-green-400 rounded-xl px-10 py-5'>
        <h2 className='text-3xl'>{data.taskNumber.active}</h2>
        <h3 className='text-xl'>Accepted Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-400 rounded-xl px-10 py-5'>
        <h2 className='text-3xl'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
