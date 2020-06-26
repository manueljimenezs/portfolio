import React from 'react';
import styled from 'styled-components';
const Ul = styled.ul`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  padding-right: 2rem;
  li {
    padding: 10px 0 0 20px;
  }

  .navlink {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    transition: .5s;
    font-family: 'Inter';
}
;
  /*For mobile*/
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 80px;
    border: 1px solid black;
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 80vh;
    width: 100%;
    
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 8px 30px;
      text-align: right;
    }

    .navlink {
        font-size: 1.5rem;

    }


  }
`;


const RightNav = ({open,handleClick}) => {

    open ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';

  return (
    <Ul open={open}>
        <li><a className='navlink' href="#home-cont">About</a></li>
        <li><a className='navlink' href="https://github.com/manueljimenezs">Github</a></li>           
        <li><a className='navlink' href="https://manueljimenezs.github.io/">Blog</a></li>                  
    </Ul>
  )
}

export default RightNav;