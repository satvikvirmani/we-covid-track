import React, { Component } from 'react'
import Navbar from './Navbar'
import Global from './Global'
import Country from './Country'
import Map from './Map'
import Footer from './Footer'

class HomeApp extends Component {
    state = {  }
    render() { 
        return ( 
          <React.Fragment>
            <Navbar />
            <section className="hero">
              <div className="hero-body">
                <p className="title has-text-centered">
                Get report of Covid-19 Cases and 
                <br/>
                keep a track of the global pandemic
                </p>
              </div>
            </section>
            <section>
              <div className="columns is-6 mainColumn">
              <Global />
              <Country />
            </div>
            </section>
            <section className="mapSection">
              <Map />
            </section>
            <section>
              <Footer />
            </section>
          </React.Fragment>
         );
    }
}
 
export default HomeApp;