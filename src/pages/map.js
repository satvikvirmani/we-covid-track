import React from 'react';
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import SEO from "../components/seo"

const MapPage = () => {
    return (
        <React.Fragment>
            <SEO/>
            <div className="w-full dark:bg-gray-900 bg-gray-50">
                <Navbar/>
                <Map/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default MapPage