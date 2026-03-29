import React from 'react'

const AcceptTask = ({data,employeeData,updateData}) => {
  const handleStatusUpdate = (status) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employee = employees.find(emp => emp.firstName === employeeData.firstName);
    const task = employee.tasks.find(t => t.title === data.title);
    task.active = false;
    employee.taskNumber.active -= 1;
       if(status==='completed'){
        task.completed=true;
        employee.taskNumber.completed +=1;
     }
     else if(status==='failed'){
        task.failed=true;
        employee.taskNumber.failed +=1;
     }
     localStorage.setItem('employees',JSON.stringify(employees));
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
     updateData(employee);
    }
  return (
    <div className='bg-red-400 w-70 h-full rounded-xl shrink-0 p-5'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-4 py-1 text-sm rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 font-semibold text-xl'>{data.title}</h2>
        <p className='mt-3 text-sm'>{data.description}</p>
        <div className='flex mt-5 gap-5'>
            <button onClick={()=>handleStatusUpdate('completed')} className='bg-green-500 px-2 py-1 text-sm'>Mark as Completed</button>
            <button onClick={()=>handleStatusUpdate('failed')} className='bg-red-500 px-2 py-1 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
