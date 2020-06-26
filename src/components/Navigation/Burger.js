import React,{ useState } from 'react';
import RightNav from './RightNav'
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const StyledBurger = styled.div`
  width: 1rem;
  height: 1.5rem;
  position: fixed;
  display: block;

  /*border: 1px solid black;*/
  
  
  top: 25px;
  right: 30px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    line-height: 2rem;
    flex-flow: column nowrap;
  }
  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#333'};
    transform-origin: 1.2px;
    transition: all 0.3s linear;
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

const Burger = () => {
    const [open, setOpen] = useState(false)
    function handleClick(open) {
        setOpen(!open);
      }
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} handleClick={handleClick}/>
        </>
    );
}

export default Burger;