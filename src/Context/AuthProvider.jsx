import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setlocalStorage } from '../utils/localStorage';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const [userData, setuserData] = useState(null)
  useEffect(() => {
      // FIX: Only set dummy data if the database doesn't exist yet!
      if(!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
          setlocalStorage();
      }
      const {employees, admin} = getLocalStorage();
      setuserData({employees, admin});
  }, [])
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
     
    </div>
  )
}

export default AuthProvider
