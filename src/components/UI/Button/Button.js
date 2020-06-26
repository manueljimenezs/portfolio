import React from 'react';

import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-family: Inter;
  font-weight: 800;
  border-radius: 5px;
  padding: 8px 20px 8px 20px;
  border: 0px;
  background: rgb(0,212,106);
  background: linear-gradient(90deg, rgba(0,107,214,1) 0%, rgba(66,107,214,1) 100%);
  box-shadow: 0 24px 38px rgba(160, 205, 250, 0.55), 0 10px 10px rgba(160, 205, 250, 0.52);
  color:white;
  outline: none;
  &:active {
    color: black;
    background: white;
  }
`;

const Button = ({label,handleClick,value}) => {
    return (
        <ButtonStyle
          href="google.com"
               value={value}
               onClick={handleClick}>
          {label}
        </ButtonStyle>
    );
}

export default Button;