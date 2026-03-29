import React from 'react'

const NewTask = ({data,employeeData,updateData}) => {
  const handleAccept = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employee = employees.find(emp => emp.firstName === employeeData.firstName);
    const task = employee.tasks.find(t => t.title === data.title);
    task.newTask=false;
    task.active=true;
    employee.taskNumber.newTask-=1;
    employee.taskNumber.active+=1
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
        <div className='mt-6 flex justify-center text-sm '>
            <button onClick={handleAccept} className='bg-yellow-500 px-4 py-2'>Accept Task</button>
        </div>
        
      </div>
  )
}

export default NewTask
