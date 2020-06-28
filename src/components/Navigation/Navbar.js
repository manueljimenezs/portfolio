import React, {Component} from 'react';
/*import './Navbar.css'*/
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  /*width: 100%;*/
  height: 3.5rem;
  display: flex;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  right: 0;
  background: rgba(255,255,250,1);

  @supports ((-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))) {
     background-color: rgba(255,255,255,0.5);
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
  }
`


class Navbar extends Component {
//const Header = () => {
    render() {
        return (

            <Nav>
                <div className="logo">
                    manujs.me
                </div>
                <div className="separator"></div>
                <Burger />
            </Nav>
        )
    }
}

export default Navbar;