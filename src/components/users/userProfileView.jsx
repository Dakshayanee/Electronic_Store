 import { Button, Card, Container, Table } from "react-bootstrap"
 import { BASE_URL } from "../../services/helper service"

const UserProfileView =({user=null})=>{

    const profileStyle={
        maxHeight:'200px',
        maxWidth:"100px",
        borderRadius:'50%'
    }
   return(
    <>
       {/* <h1>Thsi is user profile view</h1> */}
      {
        // only show when if data is available in the user
        (user && (
            <Card className="m-2 border-0 shadow">
            <Card.Body>
                <Container className="text-center">
                {/* users/image'+user.userId this takes from swagger */}
                    <img  className= "border border-primary"src={user.imageName ? BASE_URL+'users/image'+user.userId : "/assets/siddhi.png"}  style={profileStyle} alt="profile image"/>
                </Container>
   
                <h2 className="text-center text-uppercase fw-bold text-primary">{(user.name) ? user.name : 'Dummy User'}</h2>
                <div className="mt-3">
                    <Card  className="border-0 shadow-lg "style={{
                        borderRadius:'50px'
                    }}>
                        <Card.Body>
                        <Table className="text-center"responsive borderless hover >
                         <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <td>About</td>
                                <td>{user.about}</td>
                            </tr>
                            <tr>
                                <td>Roles</td>
                                <td>{user.roles.map(role=> <div key={role.roleId}>{role.roleName}</div> )}</td>
                            </tr>

                         </tbody>
                    </Table>


                        </Card.Body>
                    </Card>
                </div>
                <Container className="text-center mt-3">
                    <Button variant="success" >Update</Button>
                    <Button className="ms-2" variant="warning" >Orders</Button>
                </Container>
            </Card.Body>
          </Card>

        )

        )
      }
    </>
   )
}

export default UserProfileView