import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setlocalStorage } from '../utils/localStorage';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const [userData, setuserData] = useState('')
  useEffect(() => {
    setlocalStorage();
      const {employees,admin}=getLocalStorage();
      setuserData({employees,admin});
  },[])
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
     
    </div>
  )
}

export default AuthProvider
