import React from 'react';
import Navbar from "../components/Navbar"
import Data from "../components/Data"
import News from "../components/News"
import Footer from '../components/Footer';
import SEO from "../components/seo"

const IndexPage = () => {
    return (
        <React.Fragment>
            <SEO/>
            <div className="w-full dark:bg-gray-900 bg-gray-50 md:px-4 xl:px-8">
                <div className="w-full 2xl:w-11/12 2xl:mx-auto">
                    <Navbar/>
                    <div className="p-12 text-center font-medium">
                        <p className="text-4xl dark:text-gray-200">
                            Covid Track
                        </p>
                        <p className="text-2xl dark:text-gray-400">
                            Get report of Covid-19 Cases and keep a track of the global pandemic
                        </p>
                    </div>
                    <Data/>
                    <News/>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default IndexPage