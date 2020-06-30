import React, {Component} from 'react';
import Navbar from '../components/Navigation/Navbar';
import { FaArrowDown} from 'react-icons/fa';
import './Home.css'
import logo from './me.svg'
import ButtonLink from '../components/UI/Button/ButtonLink';
import Card from '../components/UI/Card/Card';
import projects from './ProjectData';

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
                            <ButtonLink primary href="#home-cont" label="PROJECTS"/>
                            <ButtonLink success href="#home-cont" label="MORE INFO"/>                            </div>
                    </div>
                    <span className="arrow"><FaArrowDown /></span>  
            </section>
            <section id="home-cont">
                <h1>Projects</h1>
            <div className="cardtainer">
                {projects.data.map((data) => (
                <Card key={data.title} title={data.title} href={data.url}>
                    {data.description}
                </Card>))}
            </div>
            </section>
            <footer>
                Made by Manuel Jiménez with React and love ♥ 
            </footer>
            </div>
        </>
        )
    }
}


export default Home;