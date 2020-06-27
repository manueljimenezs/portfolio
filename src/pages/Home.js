import React, {Component} from 'react';
import Navbar from '../components/Navigation/Navbar';
import { FaArrowDown } from 'react-icons/fa';
import './Home.css'
import logo from './me.svg'
//import Button from '../components/UI/Button/Button';
import ButtonLink from '../components/UI/Button/ButtonLink';

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="wrapper">
                <section className="home-intro">
                        <img src={logo} className="start-cover" alt=""/>
                        <div className="home-titledesc">
                            <div className="subtitle">Hello, I'm</div>
                            <div className="title">Manuel Jiménez</div>
                            <div className="buttonContainer" >
                            <ButtonLink href="#home-cont" label="MORE"/>
                            </div>
                        </div>
                        <span className="arrow"><FaArrowDown /></span>  
                </section>
                <section id="home-cont">
                   This is a test
                </section>
                </div>
        </>
        )
    }
}


export default Home;