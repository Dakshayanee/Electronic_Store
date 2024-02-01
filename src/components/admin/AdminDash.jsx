import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAdminUser } from '../../auth/helper.auth'
import UserContext from '../context/user.context'

const AdminDash = () => {
    
    //  to redirect to home page
    const userContext=useContext(UserContext)

    const dashboardView=()=>{
        return(
            <div>
                <h1>
                    This is Amin Dashboard
                    <Outlet/>
                </h1>
            </div>
        )
    }


  return (
    (isAdminUser()) ? dashboardView() : <Navigate to={'/users/home'} />
  )
}

export default AdminDash