import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setlocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role);
    setLoggedInUserData(userData.data)
  }

}, [])


  const handleLogin = (email,password) =>{
      if(email==='admin@me.com'&&password==='123'){
          const adminData = {firstName:"Admin"};
          setLoggedInUserData(adminData);
          setUser('admin');
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:adminData}))
      }
      else if(authData){
        const employee = authData.employees.find((e)=>email == e.email && e.password == password);
        if(employee){
          setUser('employee')
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
          setLoggedInUserData(employee);
      }
      }
      else
          alert("Invalid crendentials")
  }
 
  return (
    < > 
    {!user&&<Login handleLogin={handleLogin}/>}
    {user==='employee'&&<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
    {user==='admin'&&<AdminDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
}

export default App
