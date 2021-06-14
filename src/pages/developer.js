import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faMedium, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

if (typeof window !== 'undefined'){
    document.documentElement.lang = "en"
}

const DeveloperPage = () => {
    return (
        <React.Fragment>
            <SEO/>
            <div
                className="dark:bg-gray-900 bg-gray-50 h-full md:h-screen flex flex-col justify-between">
                <Navbar/>
                <div className="pt-6 md:pt-12">
                    <div
                        className="md:w-11/12 lg:w-8/12 flex flex-col md:flex-row mx-auto justify-between items-center">
                        <div className="grid place-items-center h-96 w-80">
                            <img
                                src="https://res.cloudinary.com/wecloud/image/upload/c_scale,h_500,r_24,w_500/v1621084872/we-covid-track/developer_jyneq6.webp"
                                alt=""
                                className="h-80 w-80"/>
                        </div>
                        <div className="flex flex-col justify-between h-96 px-4 w-80 md:px-0">
                            <h1 className="text-4xl text-center dark:text-gray-200 font-medium">Satvik Virmani</h1>
                            <div className="grid grid-cols-2 gap-4 dark:text-gray-300">
                                <div
                                    className="dark:hover:text-purple-500 hover:text-purple-500 text-center font-semibold">
                                    <a className="cursor-pointer" href="https://github.com/SatvikVirmani"><FontAwesomeIcon icon={faGithub} className="mx-2"/>
                                        Github</a>
                                </div>
                                <div
                                    className="dark:hover:text-purple-500 hover:text-purple-500 text-center font-semibold">
                                    <a className="cursor-pointer" href="https://satvikvirmani.medium.com/"><FontAwesomeIcon icon={faMedium} className="mx-2"/>
                                        Medium</a>
                                </div>
                                <div
                                    className="dark:hover:text-purple-500 hover:text-purple-500 text-center font-semibold">
                                    <a className="cursor-pointer" href="https://www.instagram.com/satvikvirmani/"><FontAwesomeIcon icon={faInstagram} className="mx-2"/>
                                        Instagram</a>
                                </div>
                                <div
                                    className="dark:hover:text-purple-500 hover:text-purple-500 text-center font-semibold">
                                    <a className="cursor-pointer" href="https://www.facebook.com/satvik.virmani.9/"><FontAwesomeIcon icon={faFacebook} className="mx-2"/>
                                        Facebook</a>
                                </div>
                            </div>
                            <p className="text-base dark:text-gray-400">
                                Hii, I'm a 17 year old high school student in India. I created this website
                                keeping simplicity and efficiency in mind. It can run on any device without any
                                issue. I will be providing constant updates to both design and usability of
                                website from time to time
                            </p>
                            <a href="https://github.com/SatvikVirmani/we-covid-track">
                                <button
                                    type="button"
                                    className="w-full ring-2 text-gray-700 ring-purple-500 dark:bg-gray-800 dark:text-gray-400 focus:outline-none rounded-md h-8 font-bold hover:text-gray-100 dark:hover:text-gray-100 dark:hover:bg-purple-500 hover:bg-purple-500 focus:ring-purple-300 dark:focus:ring-purple-300 focus:ring-4">Contribute to this project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default DeveloperPage
