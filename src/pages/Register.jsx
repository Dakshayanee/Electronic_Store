import React, { useState } from "react";
import Base from "../components/users/Base";
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { registerUser } from "../services/user service";


const Register = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    about: "",
  });
  //handle change
  const handleChange = (event, property) => {
    console.log(event);
    console.log(property);
    setData({
      ...data,
      [property]: event.target.value,
    });
  };

  const[errorData,setErrorData]=useState({
    isError:false,
    errorData:null
  })

   const [Loading,setLoading]=useState(false)

  //clear data reset
  const clearData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      about: "",
    });
     setErrorData({
        errorData:null,
        isError:false
     })
  };

  

  const submitForm=(event)=>{
        event.preventDefault();
        console.log(data);

        //validate client side
        if(data.name==undefined || data.name.trim()==""){
            toast.error("name is required!!!")
            return
        }
        if(data.email==undefined || data.email.trim()==""){
            toast.error("email is required!!!")
            return
        }
        if(data.password==undefined || data.password.trim()==''){
            toast.error("password is required!!!")
            return
        }
        if(data.confirmPassword==undefined || data.confirmPassword.trim()==''){
            toast.error("confirmPassword is required!!!")
            return
        }
        if(data.password!=data.confirmPassword){
            toast.error("password and confirm password not matched")
        }

        //call api
        setLoading(true)
        registerUser(data).then(userData=>{
            console.log(userData)
            toast.success("User Created SuccessFully!!!")
            clearData()
        }).catch(error=>{
            setErrorData({
                isError:true,
                errorData:error
            })
            toast.error("Error in creating user! Try again ")
        })
        .finally(()=>{
          setLoading(false)
        })
  }

  const RegisterForm = () => {
    return (
      // single row==12grids
      //container gives padding from both sides
      <Container>
        <Row>
          {JSON.stringify(data)}
          <Col sm={{ span: 6, offset: 3 }}>
            <Card className="my-2 border-0 shadow p-4" style={
                {
                    position:'relative',
                    top:-80
                }
            }>
              <Card.Body>

                <h2 className=" mb:5  text-center"> Store SignUp Here</h2>
                
                <Form noValidate onSubmit={submitForm}>
                  {/* name field */}
                  <Form.Group className="mt-3" controlId="formName">
                    <Form.Label>Enter Your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(event) => handleChange(event, "name")}
                     value={data.name}
                      isInvalid={errorData.errorData?.response?.data?.name}

                    />
                    <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.name}</Form.Control.Feedback>
                  </Form.Group>

                  {/* email field */}
                  <Form.Group className="mt-3" controlId="formEmail">
                    <Form.Label>Enter Your email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                      isInvalid={errorData.errorData?.response?.data?.email}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.email}</Form.Control.Feedback>
                  </Form.Group>

                  {/* password field */}
                  <Form.Group className="mt-3" controlId="formPassword">
                    <Form.Label>Enter new password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      onChange={(event) => handleChange(event, "password")}
                      value={data.password}
                      isInvalid={errorData.errorData?.response?.data?.password}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.password}</Form.Control.Feedback>
                  </Form.Group>

                  {/* //confirm password */}
                  <Form.Group className="mt-3" controlId="formPassword">
                    <Form.Label>Re-Enter password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-Enter password"
                      onChange={(event) =>
                        handleChange(event, "confirmPassword")
                        }
                        value={data.confirmPassword}
                        
                    />
                    
                    

                  </Form.Group>

                  {/* gender radio buttons */}
                  <Form.Group className="mt-3">
                    <Form.Label>Select Gender</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        name="gender"
                        label="Male"
                        type={"radio"}
                        id={"gender"}
                        value={"male"}
                        checked={data.gender=='male'}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                      <Form.Check
                        inline
                        name="gender"
                        label="female"
                        type={"radio"}
                        id={"gender"}
                        value={"female"}
                        checked={data.gender=='female'}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                    </div>
                  </Form.Group>
                  {/* text area */}
                  <Form.Group className="mt-3">
                    <Form.Label>Write Something about yourself</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      rows={"5"}
                      placeholder="Enter here"
                      onChange={(event) => handleChange(event, "about")}
                      value={data.about}
                      isInvalid={errorData.errorData?.response?.data?.about}
                    />
                    <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.about}</Form.Control.Feedback>
                  </Form.Group>
           
                <Container>
                  <p className="text-center">
                    Already Register<a href="/login ">Login</a>
                  </p>
                </Container>

                <Container className="text-center">

                  <Button type="submit" className="text-uppercase" variant="success" disabled={Loading}>
                  <Spinner animation="grow"
                             size="sm"
                              className="me-2"
                              hidden={!Loading}/>
                    <span hidden={!Loading}>...wait</span>
                   <span hidden={Loading}> Register</span>
                  </Button>

                  <Button
                    className="ms-2 text-uppercase"
                    variant="danger"
                    onClick={clearData}
                  >
                    Reset
                  </Button>
                </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <Base title="ElectroStore / SignUp" description="fill the form correctly">
      {RegisterForm()}
    </Base>
  );
};

export default Register;
