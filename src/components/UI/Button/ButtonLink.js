import React from 'react';

import styled from 'styled-components';

export const ButtonStyle = styled.a`
  font-family: Inter;
  font-weight: 800;
  font-size: 0.8rem;
  border-radius: 5px;
  margin-right: 1em;
  padding: 8px 20px 8px 20px;
  border: 0px;
  background: rgb(0,212,106);
  background: linear-gradient(90deg, rgba(0,107,214,1) 0%, rgba(66,107,214,1) 100%);
  box-shadow: 0 24px 38px rgba(160, 205, 250, 0.55), 0 10px 10px rgba(160, 205, 250, 0.52);
  color:white;
  outline: none;
  text-decoration: none;
  &:active {
    color: black;
    background: white;
  }
`;

const ButtonLink = ({label,href}) => {
    return (
        <ButtonStyle
          href={href}>
          {label}
        </ButtonStyle>
    );
}

export default ButtonLink;