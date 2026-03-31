import React from 'react'

const AllTasks = ({employeeData}) => {
  return (
    // 1. Panel Container: Matches the CreateTask form perfectly
    <div className='bg-zinc-900 border border-zinc-800 p-6 rounded-xl mt-7 shadow-sm'>
        
        {/* 2. Table Header: Sleek dark gray background with muted text */}
        <div className='bg-zinc-800/50 mb-3 py-3 px-6 flex justify-between rounded-lg border border-zinc-800'>
            <h2 className='text-sm font-semibold text-zinc-300 w-1/5 text-left'>Employee Name</h2>
            <h3 className='text-sm font-semibold text-zinc-300 w-1/5 text-center'>New Task</h3>
            <h5 className='text-sm font-semibold text-zinc-300 w-1/5 text-center'>Active Task</h5>
            <h5 className='text-sm font-semibold text-zinc-300 w-1/5 text-center'>Completed</h5>
            <h5 className='text-sm font-semibold text-zinc-300 w-1/5 text-center'>Failed</h5>
        </div>
        
        {/* 3. Table Body: Added gap-2 so the rows don't touch, and a custom scrollbar area */}
        <div className='overflow-auto flex flex-col gap-2 max-h-[250px]'>
            {employeeData && employeeData.map((elem, idx) => {
                return (  
                    // 4. The Rows: Darker background, thin border, and a beautiful hover effect!
                    <div 
                        key={idx} 
                        className='bg-zinc-950/50 hover:bg-zinc-800/50 border border-zinc-800 py-3 px-6 flex justify-between rounded-lg transition-colors duration-200 cursor-default'
                    >
                        <h2 className='text-base font-medium text-zinc-100 w-1/5 text-left'>{elem.firstName}</h2>
                        
                        {/* 5. Semantic Data Colors: Aligned perfectly with our Enterprise Theme */}
                        <h3 className='text-base font-medium text-blue-500 w-1/5 text-center'>{elem.taskNumber.newTask}</h3>
                        <h5 className='text-base font-medium text-yellow-500 w-1/5 text-center'>{elem.taskNumber.active}</h5>
                        <h5 className='text-base font-medium text-emerald-500 w-1/5 text-center'>{elem.taskNumber.completed}</h5>
                        <h5 className='text-base font-medium text-rose-500 w-1/5 text-center'>{elem.taskNumber.failed}</h5>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default AllTasks