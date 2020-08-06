import React, {Component} from 'react';
/*import './Navbar.css'*/
import styled from 'styled-components';
import Burger from './Burger';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = styled.nav`

  a {
    text-decoration: none;
    color: inherit;
    :active{
        /*color: tomato;*/
    }
  }

  /*width: 100%;*/
  height: 3rem;
  display: flex;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  right: 0;
  background: rgba(255,255,255,1);

  @supports ((-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))) {
     background-color: rgba(255,255,255,0.6);
     -webkit-backdrop-filter: blur(20px);
     backdrop-filter: blur(20px);
  }
  
  .separator {
      margin: 0 auto;
  }

  justify-content: center;
  align-items: center;

  .logo {
    /*padding: 25px 30px;*/
    font-weight:800;
    font-size: 1.2em;
    font-family: 'Inter';
  }

  .socialmedia {
      padding-right: 20px;

      svg {
          padding-top 4px;
          padding-left: 1em;
      }
  }
`


class Navbar extends Component {
//const Header = () => {
    render() {
        return (

            <Nav>
                <div className="logo">
                    <a href="#home-intro">manueljimenezs</a>
                </div>
                <div className="separator"></div>
                <div className="socialmedia">
                    <a href="https://github.com/manueljimenezs">
                        <FaGithub size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/manueljimenezs/">
                        <FaLinkedin size={25}/>
                    </a>  
                </div>
                <Burger />
            </Nav>
        )
    }
}

export default Navbar;