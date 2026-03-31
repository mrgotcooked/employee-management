import React from 'react'
import Header from '../../Others/Header'
import TaskListNumber from '../../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    // 1. The Canvas: Swapped bg-[#1C1C1C] for bg-zinc-950 to match the Login screen perfectly
    // 2. Added overflow-hidden (optional, but prevents the whole page from scrolling if the task list gets too long!)
    <div className='p-10 bg-zinc-950 h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      
      {/* These components will inherit the dark background seamlessly once we style them! */}
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data} updateData={props.updateData}/>
    </div>
  )
}

export default EmployeeDashboard