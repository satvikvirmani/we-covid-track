import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/about.jpg'

class AboutApp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar />
                <section className="hero">
                <div className="hero-body is-medium">
                                <h1 className="title is-1 has-text-centered">Developer</h1>
                        <div className="columns is-variable is-half is-8-desktop m-2">
                            <div className="column my-6">
                               <div className="columns">
                                   <div className="column">
                                       <figure className="image is-square">
                                       <img src={logo} alt="" />
                                        </figure>
                                   </div>
                                   <div className="column is-flex is-justify-content-center is-flex-direction-column">
                                       <h1 className="title is-3">Satvik Virmani</h1>
                                       <br/>
                                       <div className="columns is-mobile">
                                            <div className="column has-text-centered">
                                                <p className="title is-5 is-clickable">
                                                    <a href="https://www.facebook.com/satvik.virmani.9/">
                                                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                                                    </a>
                                                </p>
                                                </div>
                                            <div className="column has-text-centered">
                                                <p className="title is-5 is-clickable">
                                                    <a href="https://www.instagram.com/satvikvirmani/">
                                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                                    </a>
                                                </p>
                                                </div>
                                            <div className="column has-text-centered">
                                                <p className="title is-5 is-clickable">
                                                    <a href="https://github.com/SatvikVirmani">
                                                        <FontAwesomeIcon icon={faGithub} size="lg" />
                                                    </a>
                                                </p>
                                                </div>
                                            <div className="column has-text-centered">
                                                <p className="title is-5 is-clickable">
                                                    <a href="https://satvikvirmani.medium.com/">
                                                        <FontAwesomeIcon icon={faMedium} size="lg" />
                                                    </a>
                                                </p>
                                                </div>
                                       </div>
                                       <br/>
                                       <button className="button">
                                            <span className="icon is-small">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                            <span>
                                            <a href="mailto:virmanisatvik01@gmail.com">virmanisatvik01@gmail.com</a>
                                            </span>
                                        </button>
                                   </div>
                               </div>
                            </div>
                            <div className="column my-6 content">
                                <div className="block">
                                <p>Hii, I am Satvik Virmani. I'm a 17 year old high school senior in India.</p>
                                </div>
                                <div className="block">                                
                                <p>I created this website keeping simplicity and efficiency in mind. It can run on any device without any issue. I will be providing constant updates to both design and usability of website from time to time.</p>
                                </div>
                                <div className="block">                                
                                <h1 className="subtitle is-5">Want to contibute to my website</h1>
                                </div>
                                <div className="block">                            
                                <button className="button">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    <span>
                                        <a href="https://github.com/SatvikVirmani/we-covid-track">Click here</a>
                                    </span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default AboutApp;