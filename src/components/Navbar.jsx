import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../images/Covid Track@4x.png'
import { OutboundLink } from "gatsby-plugin-google-gtag"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClass : 'navbar-menu',
            burgerClass : 'navbar-burger'
        }
      }
      handleClick =  (el) => {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        if (this.state.burgerClass === 'navbar-burger'){
            this.setState({
                menuClass: 'navbar-menu is-active',
                burgerClass: 'navbar-burger is-active'
            })
        } else {
            this.setState({
                menuClass: 'navbar-menu',
                burgerClass: 'navbar-burger'
            })
        }
      }
    render() { 
        return ( 
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Covid Track: Corona Pandemic informative website." style={{maxHeight: '40px'}}/>
                </a>

                <a role="button" className={this.state.burgerClass} aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>

                <div id="navbarMenu" className={this.state.menuClass}>
                    <div className="navbar-start">
                    <a className="navbar-item" href='/'>
                        Home
                    </a>

                    <a className="navbar-item" href='/about'>
                        About
                    </a>

                    <a className="navbar-item" href='/products'>
                        Other Products
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                    <button className="button">
                        <span className="icon">
                        <FontAwesomeIcon icon={faGithub} />
                        </span>
                        <span>
                            <OutboundLink href="https://github.com/SatvikVirmani/we-covid-track">Github</OutboundLink>
                        </span>
                    </button>
                    </div>
                </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;