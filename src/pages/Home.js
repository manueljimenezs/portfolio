import React, {Component} from 'react';
import Navbar from '../components/Navigation/Navbar';
import { FaArrowDown} from 'react-icons/fa';
import './Home.css'
import logo from './me.svg'
import ButtonLink from '../components/UI/Button/ButtonLink';

//import projects from './ProjectData';
import Projects from './sections/Projects/Projects'
import Timeline from './sections/Timeline/Timeline'

class Home extends Component {
    render() {
        return (
        <>
            <Navbar />
            <div className="wrapper">
            <section id="home-intro">
                    <img src={logo} className="start-cover" alt=""/>
                    <div className="home-titledesc">
                        <div className="subtitle">Hello, I'm</div>
                        <div className="title">Manuel Jiménez</div>
                        <div className="buttons">
                            <ButtonLink primary href="#projects" label="PROJECTS"/>
                            <ButtonLink success href="https://manueljimenezs.github.io" label="BLOG"/>
                        </div>
                    </div>
                    <span className="arrow"><FaArrowDown /></span>  
            </section>
            <Projects />
            <Timeline />
            <footer>
                Made by Manuel Jiménez with React and love ♥ 
            </footer>
            </div>
        </>
        )
    }
}


export default Home;