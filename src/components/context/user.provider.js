import React, { useEffect, useState } from 'react'
import UserContext from './user.context'
import { doLoginLocalStorage, doLogoutFromLocalStorage, getDataFromLocalStorage, getUserFromLocalStorage, isLoggedIn } from '../../auth/helper.auth';
import { isAdminUser as adminUser } from '../../auth/helper.auth';

const UserProvider = ({children}) => {
    const [isLogin,setIsLogin]=useState(false);
    const [userData,setUserData]=useState(null);
    const [isAdminUser,setIsAdminUser]=useState(false);

    //get info from helper.auth
    useEffect(()=>{
        setIsLogin(isLoggedIn())
        setIsAdminUser(adminUser())
        setUserData(getDataFromLocalStorage())
    },[]);


    //login
     const doLogin=(data)=>{
        doLoginLocalStorage(data)
        setIsLogin(true)
        setIsAdminUser(adminUser())
        setUserData(getDataFromLocalStorage)
    }

    //logout
    const doLogout=()=>{
        doLogoutFromLocalStorage()
        setIsLogin(false)
        setIsAdminUser(adminUser())
        setUserData(null)
    }


  return (
    <UserContext.Provider value={{
        isLogin:isLogin,
        userData:userData,
        setIsLogin:setIsLogin,
         //you can remove setuserData
        setUserData:setUserData,
        setIsLogin:setIsLogin,
        login:doLogin,
        logout:doLogout,
        isAdminUser:isAdminUser
       
    }}>
            {children}
    </UserContext.Provider>
    
  )
}

export default UserProvider