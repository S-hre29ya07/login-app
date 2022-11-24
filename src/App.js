import { useState } from "react";
import './App.css';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    if(email===""||password==="")
    {alert("Bad Request")}
    axios.get(`https://hr.toplearnr.com/recruitment/Api/endpoint/?email=${email}&password=${password}`)
    .then((response)=> {
      console.log(response.data);
      alert(response.data.msg)
    })
    .catch(error=> {
      console.log(error)
      alert(error.data.msg)
    });
  }


  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Online Login System</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" style={{"margin-left" : "57rem"}}>
          <Nav>
            <Nav.Link href="https://s-hre29ya07.github.io/personal-website/">
              Made By Shreya Singh
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br /><br />
    <Card className="App" style={{"marginLeft" : "35rem", "width" : "25rem"}}>
      <Card.Header>Login System</Card.Header>
      <Card.Body>
        <Card.Title>Toplearnr Assignment Task</Card.Title>
        <Card.Text>
          Assigned by Shawn Chong
        </Card.Text>
        Email : <input value={email} onChange={handleEmail} type="text" /> <br /><br />

      Password : <input value={password} onChange={handlePassword} type="text" /> <br /><br />
      <Button variant="primary" onClick={handleApi} >Login</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Frontend Development task</Card.Footer>
    </Card>
    </div>
  );
}

export default App;