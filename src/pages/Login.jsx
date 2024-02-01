import React, { useContext, useState } from 'react'
import Base from '../components/users/Base'
import {Alert, Button, Card, CardBody, Col, Container, Form, FormControl, Row, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { LoginUser } from '../services/user service'
import { useNavigate } from 'react-router-dom'
import UserContext from '../components/context/user.context'

const Login = () => {
   
     let redirect=useNavigate()
    const userContext=useContext(UserContext)

  let[data,setData]=useState({
    email:'',
    password:''
  })

  let[error,setError] =useState({
    errorData:null,
    isError:false
   })

   let[loading,setLoading]=useState(false)

   //handle change
   const handleChange =(event,property)=>{
      setData({
        ...data,
        [property]:event.target.value
      })
   }
    
   //submit form
   const submitForm =(event)=>{
    //to avoid reload after submitting the form
     event.preventDefault();
       if(data.email===undefined || data.email.trim()===''){
        toast.error("email required")
        return
       }
       if(data.password===undefined || data.password.trim()===''){
        toast.error("password required")
        return
       }
       //login api
       setLoading(true)
       LoginUser(data).then((data)=>{
          toast.success("Logged in")
          setError({
            errorData:null,
            isError:false
         })

          //redirect to dashboard page:
          //if normal user:redirect to normal dashboard
             
          //home dashboard page
            // /users/home

          //  userContext.setIsLogin(true)
          //  userContext.setUserData(data)

          //this login gets from user.provider
          userContext.login(data)

            redirect("/users/home")



          //admin:redirect to admin dashboard
          
        }).catch((error)=>{
          toast.error(error.response.data.message)
          setError({
             errorData:error,
             isError:true
          })
        })
       .finally(()=>{
         setLoading(false)
       })

       
        
       }
   
    const clearData =()=>{
    setData({
    email:'',
    password:''
   })

  }
  
  const LoginForm=()=>{
      return(
        <Container>
          
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Card className="my-2 border-0 shadow p-4"
            style={{
              position:'relative',
              top:-60
            }}>
              <Card.Body>
              {/* {JSON.stringify(userContext)} */}
              <h2 className=" mb:5  text-center"> Store Login Here</h2>
              <Alert onClose={()=> setError({
                   isError:false,
                   errorData:null
                })} dismissible variant="danger" show={error.isError}>
                    {/* This is message */}
                    {error.errorData?.response?.data?.message}
                </Alert>

                <Form noValidate onSubmit={submitForm}>
                  {/* email login field */}
               <Form.Group className='mt-3'>
               <Form.Label>Enter Your email</Form.Label>
               <FormControl 
               type="email"
               placeholder="Enter Email"
               value={data.email}
               onChange={(event)=>handleChange(event,'email')}/>
                </Form.Group>
              
              {/* //password login field */}
                <Form.Group className='mt-3'>
               <Form.Label>Enter Your Password</Form.Label>
               <FormControl 
               type="password"
               placeholder="Enter password"
               value={data.password}
               onChange={(event)=>handleChange(event,'password')}/>
                
                </Form.Group>

                <Container className='mt-5'>
                {/* <p className="text-center mt-7"> forget password <a href="/forget">
                      click here
                  </a></p> */}
                  <p className="text-center"> Not yet register <a href="/register">
                      Register here
                  </a></p>
                </Container>

                <Container className='text-center'>

                <Button  type="submit" className=" mt-2 text-uppercase" variant="success" disabled={loading}>
                 <Spinner 
                   animation='grow'
                   size='sm'
                   hidden={!loading}
                   className={'me-2'}
                 />

                 <span hidden={!loading}>Please Wait....</span>
                 <span hidden={loading}>Login</span> 
                  
                  </Button>
                <Button className=" mt-2 ms-2 text-uppercase"
                    variant="danger" onClick={clearData} >Reset</Button>
                </Container>

                </Form>

              </Card.Body>
            </Card>
          
          
          </Col>
        </Row>    
  

     </Container>
      )
  }

  return (
    <Base title="ElectroStore / Login" description='Login here'>
      {LoginForm()}
     </Base>
  )
}

export default Login