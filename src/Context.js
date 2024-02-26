import React, { createContext, useContext, useEffect, useState } from 'react'

const User = createContext()

function UserProvider({children}) {
const [user , setUser] = useState({
  userinfo : null
})
useEffect(()=>{
 const getuser =  localStorage.getItem("USER")
 const parseuser = JSON.parse(getuser)
 setUser({...user ,userinfo : parseuser})
},[])
  return (
    <>
     <User.Provider value={[user , setUser]}>
        {children}
        </User.Provider> 
    </>
  )
}
const useAuth = () => useContext(User)
export  { UserProvider, User, useAuth}