import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTasks = () => {
  const authData = useContext(AuthContext);
  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 h-48 rounded '>
      <div className='bg-black px-4 py-2 flex justify-between rounded mb-2'>
                    <h2 className='w-1/5'>Employee Name</h2>
                    <h3 className='w-1/5 '>New Task</h3>
                    <h5 className='w-1/5 '>Active Task</h5>
                    <h5 className='w-1/5 '>Completed</h5>
                    <h5 className='w-1/5 '>Failed</h5>
                  </div>
                  <div className='h-[80%] overflow-auto'>
      {authData.employees.map(function(elem,idx){
          return <div key={idx}className='bg-[#1C1C1C] px-4 py-2 flex justify-between rounded mb-2 border-2 border-green-500'>
                    <h2 className='w-1/5 text-white' >{elem.firstName}</h2>
                    <h3 className='w-1/5 text-blue-500' >{elem.taskNumber.newTask}</h3>
                    <h5 className='w-1/5 text-yellow-500'>{elem.taskNumber.active}</h5>
                    <h5 className='w-1/5 text-green-500' >{elem.taskNumber.completed}</h5>
                    <h5 className='w-1/5 text-red-600' >{elem.taskNumber.failed}</h5>
                  </div>
                  
      })}
      
      </div>
    </div>
  )
}

export default AllTasks
