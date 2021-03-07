import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import forecastLogo from '../images/Forecast@4x.png'
import garimamalikLogo from '../images/Garima Malik@4x.png'

class OtherProductsApp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar />
                <section className="hero is-medium">
                    <div className="hero-body">
                    <div className="block">
                        <div className="columns">
                            <div className="column is-4">
                            <figure className="image">
                                <a href="https://github.com/SatvikVirmani/we-forecast" target="blank">
                                    <img src={forecastLogo} alt="" />
                                </a>
                            </figure>
                            </div>
                            <div className="column is-8 is-flex is-justify-content-center is-align-items-left is-flex-direction-column">
                                <p className="title is-5">
                                Forecast is open source weather forcasting app built on Open Weather Api.
                                </p>
                                <div className=" is-flex is-justify-content-left is-align-items-center is-flex-direction-row">
                                <span className="tag is-dark mr-2">Electron JS</span>
                                <span className="tag is-dark mr-2">Node</span>
                                <span className="tag is-dark mr-2">Bulma</span>
                                <button className="button">
                                    <span className="icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    <span>
                                        <a href="https://github.com/SatvikVirmani/we-forecast">Github</a>
                                    </span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="columns">
                            <div className="column is-4">
                            <figure className="image">
                                <a href="http://garimamalik9.github.io" target="blank">
                                    <img src={garimamalikLogo} alt="" />
                                </a>
                            </figure>
                            </div>
                            <div className="column is-8 is-flex is-justify-content-center is-align-items-left is-flex-direction-column">
                                <p className="title is-5">
                                It is a artist website design written in vanilla CSS based on simplicity and ethnicity.
                                </p>
                                <div className=" is-flex is-justify-content-left is-align-items-center is-flex-direction-row">
                                <span className="tag is-dark mr-2">CSS</span>
                                <span className="tag is-dark mr-2">JS</span>
                                <span className="tag is-dark mr-2">Image Kit</span>
                                <button className="button">
                                    <span className="icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    <span>
                                        <a href="https://github.com/garimamalik9/garimamalik9.github.io">Github</a>
                                    </span>
                                </button>
                                </div>
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
 
export default OtherProductsApp;