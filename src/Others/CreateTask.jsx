import React from 'react'

const CreateTask = () => {
    return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form className='flex items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-gray-200'>Task Title</h3>
                        <input className='border-[2px] px-2 py-1 rounded border-gray-400  w-4/5 outline-none mb-3' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-gray-200'>Date</h3>
                        <input className='border-[2px] px-2 py-1 rounded border-gray-400  w-4/5 outline-none mb-3' type="date" />
                    </div>
                    <div>
                        <h3 className='text-gray-200'>Assign to</h3>
                        <input className='border-[2px] px-2 py-1 rounded border-gray-400  w-4/5 outline-none mb-3' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-gray-200'>Category</h3>
                        <input className='border-[2px] px-2 py-1 rounded border-gray-400  w-4/5 outline-none mb-3' type="text" placeholder='design,dev,etc' />
                    </div>
                </div>
                <div className='w-1/2 '>
                    <h3>Description</h3>
                    <textarea className='border-[2px] border-gray-400 rounded outline-none p-1 mb-4' rows={9} cols={83}/>
                    <br />
                    <button className='w-full bg-green-400 py-5 rounded'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
