import React from 'react';

import styled, { css } from 'styled-components';

/*shadow: 0 24px 38px rgba(0, 107, 214, 0.25), 0 10px 10px rgba(0, 107, 214, 0.22),*/

export const ButtonStyle = styled.a`
  font-family: Inter;
  font-weight: 800;
  font-size: 0.8rem;
  border-radius: 5px;
  margin-right: 1em;
  padding: 8px 20px 8px 20px;
  border: 0px;
  color:white;
  outline: none;
  text-decoration: none;
  &:active {
    color: black;
    background: white;
  }
  /*background-color: rgba(0, 107, 214, 1);
  box-shadow: 0 24px 38px rgba(0, 107, 214, 0.25),  0 10px 10px rgba(0, 107, 214, 0.25);
  */
  ${props => props.primary && css`
    background-color: rgba(0, 107, 214, 1);
    box-shadow: 0 24px 38px rgba(0, 107, 214, 0.25),  0 10px 10px rgba(0, 107, 214, 0.25);
  `}

  ${props => props.danger && css`
    background-color: rgba(205, 71, 70, 1);
    box-shadow: 0 24px 38px rgba(205, 71, 70, 0.25),  0 10px 10px rgba(205, 71, 70, 0.25);
  `}

  ${props => props.success && css`
    background-color: rgba(101, 169, 99, 1);
    box-shadow: 0 24px 38px rgba(101, 169, 99, 0.25),  0 10px 10px rgba(101, 169, 99, 0.25);
  `}
  `;



const ButtonLink = ({label,href,...props}) => {
    return (
        <ButtonStyle {...props}
          href={href}>
          {label}
        </ButtonStyle>
    );
}

export default ButtonLink;