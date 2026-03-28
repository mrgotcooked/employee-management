import React, { useEffect, useState } from 'react'
import Header from '../../Others/Header'
import CreateTask from '../../Others/CreateTask'
import AllTasks from '../../Others/AllTasks'

const AdminDashboard = (props) => {  
  
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask refreshEmployeeData={props.refreshEmployeeData}/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard
