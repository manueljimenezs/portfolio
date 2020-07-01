import React from 'react';
import styled from 'styled-components';
import timeline from './TimelineData';

export const TimelineStyle = styled.section`
    padding: 0 2em;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Inter';
    .bold {
        font-weight: bold;
    }
    
    .time {
        left: -50px;
    }
    
    .tl-wrapper {
        /*padding-left:20px;*/
        font-family: 'Helvetica';
        font-size: 14px;
    }
    
    .list {
        position: relative;
        padding-left: 45px;
        list-style: none;
        z-index: -99;
    }
    
    .list::before {
            display: inline-block;
            content: '';
            position: absolute;
            top: 0;
            left: 15px;
            width: 10px;
            height: 100%;
            border-left: 2px solid #006bd6;
    }
    
    .item::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 20px;
        width: 12px;
        height: 12px;
        border: 2px solid #006bd6;
        border-radius: 50%;
        background-color: #FFF;
    } 
    
    .item {
        position: relative;
    }
    .item:not(:last-child) {
        padding-bottom: 2em;
    }
    .item::before {
        display: inline-block;
        content: '';
        position: absolute;
        left: -37px;
        height: 12px;
        width: 12px;
    }
`

const Timeline = () => {
    return (     
    <TimelineStyle id="timeline">
        <h1>My Timeline</h1>
        <div className="tl-wrapper">
            <ul className="list">
                {timeline.data.map((data) => (
                <li className="item">
                    <div className="bold time">{data.date}</div> 
                    <div className="bold">{data.title}</div>
                    <div>{data.description}</div>
                </li>
                ))}
            </ul>
        </div>
    </TimelineStyle>
    );
};

export default Timeline;