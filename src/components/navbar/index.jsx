import Login from './../login';
import SignUp from './../signup';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [isLogin ,setLogin] = useState(false);
    const [isSignUp ,setSignUp] = useState(false);
    const showLogin = () => {
        setLogin(!isLogin)
    }
    const showSignUp = () => {
        setSignUp(!isSignUp)
    }


return (
    <div className="h-[100px] w-[100%] border-black border-[1px]">
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand >Navbar</Navbar.Brand>
      <Nav className="flex justify-between">
      <button onClick={showLogin} className="loginbtn">
            Login
            {
                (isLogin) ?
                <Login/>
                :
                null
            }
        </button>
      <button onClick={showSignUp} className="loginbtn">
            SignUp
            {
                (isSignUp) ?
                <SignUp/>
                :
                null
            }
            
        </button>
      </Nav>
    </Container>
  </Navbar>
       
               
              
      

    </div>
)
}

export default Header;