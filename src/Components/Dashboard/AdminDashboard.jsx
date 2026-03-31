import React, { useEffect, useState } from 'react'
import Header from '../../Others/Header'
import CreateTask from '../../Others/CreateTask'
import AllTasks from '../../Others/AllTasks'

const AdminDashboard = (props) => {  
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees'))||[];
    setEmployeeData(data);
  }, [])
  const updateAdminData = () =>{
    const freshData = JSON.parse(localStorage.getItem('employees'))||[];
    setEmployeeData(freshData);
  }
  return (
    <div className='h-screen w-full p-10 bg-zinc-950'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask updateAdminData={updateAdminData} />
      <AllTasks employeeData={employeeData}/>
    </div>
  )
}

export default AdminDashboard
