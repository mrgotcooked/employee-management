import React from 'react'

const NewTask = ({data,employeeData,updateData}) => {
  
  // Logic remains untouched!
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
    // 1. Uniform Card Container: Matches Accept, Complete, and Failed exactly.
    <div className='w-[300px] p-5 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0 flex flex-col justify-between'>
        
        <div>
            <div className='flex justify-between items-center'>
              {/* 2. Glassy Blue Tag */}
              <h3 className='bg-blue-500/10 text-blue-500 px-3 py-1 text-xs font-medium rounded-full'>
                {data.category}
              </h3>
              <h4 className='text-sm text-zinc-400'>{data.date}</h4>
            </div>
            
            <h2 className='mt-5 font-semibold text-xl text-zinc-100'>{data.title}</h2>
            <p className='mt-3 text-sm text-zinc-400'>{data.description}</p>
        </div>

        {/* 3. Single Action Button: Full width, vibrant blue, tactile hover effects */}
        <div className='mt-6'>
            <button 
                onClick={handleAccept} 
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm font-medium rounded transition-colors duration-200 active:scale-95'
            >
                Accept Task
            </button>
        </div>
        
      </div>
  )
}

export default NewTask