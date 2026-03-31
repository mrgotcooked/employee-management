import React, { useState } from 'react'

const CreateTask = (props) => {
    // Logic remains completely untouched!
    const [taskTitle, setTaskTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [assignTo, setAssignTo] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        const taskObj = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            title: taskTitle,
            description: taskDescription,
            date: date,
            category: category,
        }
        const data = JSON.parse(localStorage.getItem('employees'));
        data.forEach(employee => {
            if(employee.firstName===assignTo){
                employee.tasks.push(taskObj);
                employee.taskNumber.newTask+=1;
            }
        });
        localStorage.setItem('employees',JSON.stringify(data));
        props.updateAdminData();    
        setTaskTitle('');
        setDate('');
        setCategory('');
        setAssignTo('');
        setTaskDescription('');
    }

    return (
        // 1. Panel Container: Matches our new zinc-900 card style with rounded corners
        <div className='p-8 bg-zinc-900 border border-zinc-800 mt-7 rounded-xl shadow-sm'>
            <form onSubmit={submitHandler} className='flex flex-col md:flex-row items-start justify-between gap-10'>
                
                {/* LEFT COLUMN */}
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div>
                        <h3 className='text-sm font-medium text-zinc-300 mb-1'>Task Title</h3>
                        <input 
                            value={taskTitle} 
                            onChange={(e)=>setTaskTitle(e.target.value)} 
                            className='w-full bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md placeholder:text-zinc-600 transition-all duration-300' 
                            type="text" 
                            placeholder='e.g., Make a UI design' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm font-medium text-zinc-300 mb-1'>Date</h3>
                        <input 
                            value={date} 
                            onChange={(e)=>setDate(e.target.value)} 
                            className='w-full bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md placeholder:text-zinc-600 transition-all duration-300' 
                            type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm font-medium text-zinc-300 mb-1'>Assign to</h3>
                        <input 
                            value={assignTo} 
                            onChange={(e)=>setAssignTo(e.target.value)} 
                            className='w-full bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md placeholder:text-zinc-600 transition-all duration-300' 
                            type="text" 
                            placeholder='Employee name' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm font-medium text-zinc-300 mb-1'>Category</h3>
                        <input 
                            value={category} 
                            onChange={(e)=>setCategory(e.target.value)} 
                            className='w-full bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md placeholder:text-zinc-600 transition-all duration-300' 
                            type="text" 
                            placeholder='Design, Dev, etc.' 
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div className='flex-grow'>
                        <h3 className='text-sm font-medium text-zinc-300 mb-1'>Description</h3>
                        <textarea 
                            value={taskDescription} 
                            onChange={(e)=>setTaskDescription(e.target.value)} 
                            className='w-full h-[220px] resize-none bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md placeholder:text-zinc-600 transition-all duration-300' 
                            placeholder='Detailed description of the task...'
                        />
                    </div>
                    
                    {/* The "Create" Button */}
                    <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-semibold transition-colors duration-200 active:scale-95 shadow-lg shadow-emerald-600/20'>
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask