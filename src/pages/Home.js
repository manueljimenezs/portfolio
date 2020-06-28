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
                            <div className="text">Computer Scientist @ Alcobendas, Madrid</div>
                            <div className="buttons">
                                <ButtonLink primary href="#home-cont" label="PROJECTS"/>
                                <ButtonLink success href="#home-cont" label="MORE INFO"/>                            </div>
                        </div>
                        <span className="arrow"><FaArrowDown /></span>  
                </section>
                <section id="home-cont">
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                    <p>
                   This is a test
                   </p>
                  
                </section>
                </div>
        </>
        )
    }
}


export default Home;