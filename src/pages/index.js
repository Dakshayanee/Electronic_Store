import { Button } from "react-bootstrap";
import Base from "../components/users/Base";
import { toast } from "react-toastify";
import axios from "axios";
function Index (){

    function showSuccessToast() {
    toast.success("This is success message!!")
    }

    function getDataFromServer(){
      toast.info("Getting data from server")
      axios.get("http://localhost:9090/users").then((data)=>{
        console.log(data)
        toast.success("request done")
      })
      .catch((error)=>{
        console.log(error)
        toast.error("Something went wrong")
      })
      
    }
    return(
    <Base  title=" Shop what you need"description="Welcome to trending store" buttonEnabled={true}>
      <h1>Working Page</h1>
  <Button variant="success" onClick={showSuccessToast}>Toastify Success</Button>
  <Button variant="primary" onClick={getDataFromServer}  className="m-2">Get data from fake API</Button>
    </Base>
  )
}
export default Index;