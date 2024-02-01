import { Alert, Col, Container, Row } from "react-bootstrap";
import UserProfileView from "./userProfileView";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user.context";
import { getUser } from "../../services/user service";
import { toast } from "react-toastify";

const Profile = () => {

    const userContext=useContext(UserContext)
    const [user,setUser]=useState(null)

    useEffect(()=>{
          if(userContext.userData){
          getUserDataFromserver()
          }
    },[userContext.userData])

    const getUserDataFromserver=()=>{
        //api call
        console.log(userContext)
        const userId=userContext.userData.user.userId

        //getUser gets from user service
        getUser(userId)
        .then(data => {
            console.log(data)
            setUser(data)
        })
         .catch(error => {
            console.log(error)
            setUser(null)
            toast.error("error in loading user information from server")
         })
    }

  return (
    <div>
      {/* <h1>This is profile</h1> */}
      <Container className="mt-3">
        <Row>
          <Col md={
            {
                span:8,
                offset:2
            }
          }>
           {(user ? (
             <UserProfileView
             user={
            //   {
            //    name: "Siddhi Sanjay Mahajan",
            //    email: "siddhi@gmail.com",
            //    gender: "female",
            //    about: "I am a professional programmer",
            //    roles: [{roleId:1, roleName: "Admin" }],
            //  }
               user
            }
           />
           ) :<Alert><h1 className="text-center text-uppercase m-2">User not laoded from server!!</h1></Alert>)
           }
             {/* {userContext.userData.user.userId} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
