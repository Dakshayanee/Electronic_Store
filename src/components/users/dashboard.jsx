import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import UserContext from "../context/user.context";

const Dashboard = () => {


    //private dashboard
  const userContext=useContext(UserContext)

  //to redirect to another route
  const redirect=useNavigate()

  const dashboardView = () => {
    return(
        <div>
      {/* <h1>This is Dashboard</h1> */}

      {/* for nested component */}
      <Outlet />
    </div>
    )
  };

  //not logged in view
  const notLoggedInView=()=>{
    return(
        <Container>
            <Row>
                <Col md={{
                    
                        span:8,
                        offset:2
            }}>
                  <Card className="border-0 shadow mt-5">
                    <Card.Body className="text-center">
                        <h3>You are not logged in</h3>
                        <p>Please do login to view!!!!</p>
                        <Button as={NavLink} to="/login" variant="success">Login Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </Container>
    )
  }

  return (
    (userContext.isLogin)?dashboardView():redirect("/login")
 );
};

export default Dashboard;
