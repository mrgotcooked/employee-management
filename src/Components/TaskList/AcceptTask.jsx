import React from 'react'

const AcceptTask = ({data,employeeData,updateData}) => {
  
  // The logic stays EXACTLY the same! We are only painting the outside.
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
    // 1. The Card Container: Dark gray, subtle border, locked width (w-[300px]) so they don't squish
    <div className='w-[300px] p-5 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0 flex flex-col justify-between'>
        
        <div>
            <div className='flex justify-between items-center'>
              {/* 2. The Glassy Tag: 10% opacity background makes it look highly premium */}
              <h3 className='bg-rose-500/10 text-rose-500 px-3 py-1 text-xs font-medium rounded-full'>
                {data.category}
              </h3>
              {/* Muted Date */}
              <h4 className='text-sm text-zinc-400'>{data.date}</h4>
            </div>
            
            {/* 3. Typography: Bright title, muted description */}
            <h2 className='mt-5 font-semibold text-xl text-zinc-100'>{data.title}</h2>
            <p className='mt-3 text-sm text-zinc-400'>{data.description}</p>
        </div>

        {/* 4. The Action Buttons: Split 50/50 width, hover effects, active press animations */}
        <div className='flex justify-between mt-6 gap-3'>
            <button 
                onClick={()=>handleStatusUpdate('completed')} 
                className='w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 text-sm font-medium rounded transition-colors duration-200 active:scale-95'
            >
                Completed
            </button>
            <button 
                onClick={()=>handleStatusUpdate('failed')} 
                className='w-1/2 bg-rose-600 hover:bg-rose-700 text-white py-2 text-sm font-medium rounded transition-colors duration-200 active:scale-95'
            >
                Failed
            </button>
        </div>
        
      </div>
  )
}

export default AcceptTask