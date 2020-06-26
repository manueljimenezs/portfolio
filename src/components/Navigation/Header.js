import React, {Component} from 'react';
import './Header.css'


class Header extends Component {
//const Header = () => {
    render() {
        return (
            <div className="navigation">
                <nav>
                    <ul class="navlinks">
                        <li><a className='navlink' href="#home-cont">About</a></li>
                        <li><a className='navlink' href="https://github.com/manueljimenezs">Github</a></li>           
                        <li><a className='navlink' href="https://manueljimenezs.github.io/">Blog</a></li>                  
                    </ul>
                </nav> 
            </div>
        )
    }
}

export default Header;