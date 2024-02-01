import { publicAxios } from "./axios service"

//register new user
export const registerUser=(data)=>{
 return publicAxios.post('/users',data).then((response)=>response.data);
};

//Login user
export const LoginUser=(logindata)=>{
    return publicAxios.post('/auth/login',logindata).then((response)=>response.data);
   };

//get userdata by user id
   export const getUser=(userId)=>{
    return publicAxios.get(`/users/${userId}`).then((response)=>response.data)
   }



export default registerUser;