import React, {Component} from 'react';
/*import './Navbar.css'*/
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  /*width: 100%;*/
  height: 75px;
  display: flex;
  padding: 0 2rem;

  .separator {
      margin: 0 auto;
  }

  justify-content: center;
  align-items: center;

  .logo {
    /*padding: 25px 30px;*/
    font-weight:800;
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