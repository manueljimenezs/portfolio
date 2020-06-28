import React,{ useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`

  
  width: 25px;
  height: 26px;
  display: block;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    line-height: 2rem;
    flex-flow: column nowrap;
  }
  div {
    height: 4px;
    background-color: ${({ open }) => open ? '#fff' : '#000'};
    transform-origin: 0.3px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.ul`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 0;
  
  li {
    padding: 0 0 0 20px;
    a {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      font-family: 'Inter';
    }
  }

;
  /*For mobile*/
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 80px;
    flex-flow: column nowrap;
    background-color: tomato;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    
    /*transition: transform 0.1s ease-in-out;*/
/*
    li:hover {
      background-color: #fff;
      color: #000;

      a {
        color: tomato;
      }
    }*/

    li {
      
      padding: 8px 30px;
      text-align: right;

      a {
        color: tomato;
        font-size: 1.2rem;
        color: white;
        font-weight: 800;
      }
    }

  

  }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)

      /* Preventing page scrolling when open*/
      /*open ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';*/

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Ul open={open}>
                <li><a onClick={() => setOpen(!open)} href="#home-cont">About</a></li>
                <li><a href="https://github.com/manueljimenezs">Github</a></li>           
                <li><a href="https://manueljimenezs.github.io/">Blog</a></li>                             
                <li><a href="https://manueljimenezs.github.io/">LinkedIn</a></li>                             
                <li><a href="https://manueljimenezs.github.io/">Contact</a></li>                             
            </Ul>
        </>
    );
}

export default Burger;