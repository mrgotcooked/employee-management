import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setlocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // 1. Initial Local Storage Setup
  useEffect(() => {
    if(!localStorage.getItem('employees')) {
      setlocalStorage();
    }
    getLocalStorage();
  }, [])
  
  // 2. Persistent Login Check (UPDATED)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      
      // FIX: Fetch fresh data from the main 'employees' array if it's an employee
      if (userData.role === 'employee') {
        const employees = JSON.parse(localStorage.getItem('employees'));
        const freshEmployeeData = employees.find((emp) => emp.email === userData.data.email);
        setLoggedInUserData(freshEmployeeData);
      } else {
        setLoggedInUserData(userData.data);
      }
    }
  }, [])

  // 3. Manual Refresh Function (Kept intact for Admin Dashboard prop)
  const refreshEmployeeData = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.role === 'employee') {
      const employees = JSON.parse(localStorage.getItem('employees'));
      const updatedEmployee = employees.find((emp) => emp.email === loggedInUser.data.email);
      setLoggedInUserData(updatedEmployee);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: updatedEmployee}))
    }
  }

  // 4. Login Handler (UPDATED)
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminData = {firstName: "Admin"};
      setLoggedInUserData(adminData);
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: adminData}))
    } 
    else {
      // FIX: Read directly from local storage instead of stale AuthContext
      const employeesData = JSON.parse(localStorage.getItem('employees'));
      
      if (employeesData) {
        const employee = employeesData.find((e) => email == e.email && e.password == password);
        
        if (employee) {
          setUser('employee');
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}));
          setLoggedInUserData(employee);
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("Invalid credentials");
      }
    }
  }
  
  return (
    <> 
      {!user && <Login handleLogin={handleLogin}/>}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
      {user === 'admin' && <AdminDashboard changeUser={setUser} data={loggedInUserData} refreshEmployeeData={refreshEmployeeData} />}
    </>
  )
}

export default App