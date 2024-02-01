

//data:save local storage

export const doLoginLocalStorage=(data)=>{
    //localStorage provided by browser
     localStorage.setItem("userData",JSON.stringify(data))
}

//data:fetch
 
export const getUserFromLocalStorage=()=>{
    const data=getDataFromLocalStorage()  
    if(data!=null){
      return data.user
    }
    return null;
}

export const getTokenFromLocalStorage=()=>{
  const data=getDataFromLocalStorage()  
  if(data!=null){
    return data.jwtToken
  }
  return null;
}

export const getDataFromLocalStorage=()=>{
 const data =localStorage.getItem("userData")
 if(data!=null){
    return JSON.parse(data)
 }
}

 //show for admin user
 export const isAdminUser=()=>{
  if(isLoggedIn()){
    
   const user=getUserFromLocalStorage()
   const roles=user.roles;
   
  //  get this roleId from application.property
   if(roles.find((role) => role.roleId == "wetrsdfwetwfasfwdf")){
    return true

  }else{
    return false
  }
}else{
  return false
}

}

//to check user is login or not
 export const isLoggedIn=()=>{
    if(getTokenFromLocalStorage()){
        return true
    }
    return false
}

//data:remove:logout

export const doLogoutFromLocalStorage=()=>{
    localStorage.removeItem("userData");
}