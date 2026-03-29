import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data,updateData}) => {
  return (
    <div className=' h-[55%] mt-10 py-10 flex gap-5 overflow-x-auto'>
      {data.tasks.map((e,idx)=>{  
        if(e.active)
            return <AcceptTask key={idx} data={e} employeeData={data} updateData={updateData}/>
        if(e.completed)
            return <CompleteTask key={idx} data={e}/>
        if(e.newTask)
            return <NewTask key={idx}data={e} employeeData={data} updateData={updateData}/>
        if(e.failed)
            return <FailedTask key={idx} data={e}/>
      })}
     
      
    </div>
  )
}

export default Tasklist
