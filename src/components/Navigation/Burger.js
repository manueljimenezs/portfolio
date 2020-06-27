import React,{ useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`

  
  width: 1.5rem;
  height: 1.5rem;
  /*position: fixed;*/
  display: block;

  
  
  /*top: 25px;*/
  /*right: 30px;*/
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    line-height: 2rem;
    flex-flow: column nowrap;
  }
  div {
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#333'};
    transform-origin: 1.2px;
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
  }

  .navlink {
    text-decoration: none;
    color: #000;
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
    flex-flow: column nowrap;
    background-color: tomato;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    
    transition: transform 0.3s ease-in-out;
    li {
      
      padding: 8px 30px;
      text-align: right;
    }

    .navlink {
        font-size: 1.5rem;
        color: #fff;

    }


  }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)

      /* Preventing page scrolling when open*/
      open ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Ul open={open}>
                <li><a className='navlink' onClick={() => setOpen(!open)} href="#home-cont">About</a></li>
                <li><a className='navlink' href="https://github.com/manueljimenezs">Github</a></li>           
                <li><a className='navlink' href="https://manueljimenezs.github.io/">Blog</a></li>            
            </Ul>
        </>
    );
}

export default Burger;