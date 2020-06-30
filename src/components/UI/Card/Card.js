import React from 'react';
import styled from 'styled-components';

export const CardStyle = styled.div`
    a {
        text-decoration: none;
        color: inherit;
        :active{
            /*color: tomato;*/
        }
    }

    .card-title {
        color:  rgb(0, 107, 214);
        font-weight: bold;
        padding-bottom: 1em;
    }

    height: 8em;
    /*margin: 0.4em 0.7em;*/
    border-radius: 6px;
    border: 1px solid #e1e4e8;
    font-size: 13px;
    font-family: 'Helvetica', sans-serif, 'Roboto';
    padding: 8px 8px;
    background-color: #fff;
    margin-bottom: 1em;
    color: #000;
    overflow: hidden;
    -webkit-box-shadow: 0px 13px 10px -13px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 13px 10px -13px rgba(0,0,0,0.51);
box-shadow: 0px 13px 10px -13px rgba(0,0,0,0.51);

@media (min-width: 792px) {
    flex: 0 30%;
    margin-bottom: 1.5%;
}
`

const Card = ({title,href,...props}) => {
    return (
        <CardStyle>
            <a href={href}>
                <div class="card-title">{title}</div>
            </a>
            <div class="card-description">
                {props.children}
            </div>
            
        </CardStyle>
    );
}

export default Card;