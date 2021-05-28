import React, {useState} from "react"
import {OutboundLink} from "gatsby-plugin-google-gtag"
import ThemeToggle from "./ThemeToggle"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    const [isMobile,
        setMobile] = useState(false)

    return (
        <React.Fragment>
            <nav className="py-2 px-4 flex flex-row justify-between items-center">
                <a href="/">
                    <img
                        width="205"
                        height="48"
                        src="https://res.cloudinary.com/wecloud/image/upload/c_scale,h_48/v1621147239/we-covid-track/logo_kae2ot.webp"
                        alt="Covid Track"/>
                </a>
                <div className="hidden md:flex flex-row justify-evenly">
                    <a
                        href="/"
                        className="mx-4 text-base hover:text-purple-500 dark:hover:text-purple-500 font-semibold dark:text-gray-400 grid place-items-center">Home</a>
                    <a
                        href="/#news"
                        className="mx-4 text-base hover:text-purple-500 dark:hover:text-purple-500 font-semibold dark:text-gray-400 grid place-items-center">News</a>
                    <a
                        href="/map"
                        className="mx-4 text-base hover:text-purple-500 dark:hover:text-purple-500 font-semibold dark:text-gray-400 grid place-items-center">Map</a>
                    <a
                        href="/developer"
                        className="mx-4 text-base hover:text-purple-500 dark:hover:text-purple-500 font-semibold dark:text-gray-400 grid place-items-center">Developer</a>
                    <ThemeToggle/>
                </div>
                <button
                    name="toggleMenuBtn"
                    className="md:hidden p-2 dark:text-gray-400 rounded-md dark:hover:text-white focus:outline-none focus:ring-2 dark:focus:ring-purple-500 dark:hover:bg-gray-700"
                    onClick={() => {
                    setMobile(!isMobile)
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                <OutboundLink
                    href="https://github.com/SatvikVirmani/we-covid-track"
                    className="hidden md:block mx-4 text-sm hover:text-purple-500 dark:hover:text-purple-500 dark:text-gray-500 font-medium">
                    <FontAwesomeIcon icon={faGithub}/>
                    View on Github
                </OutboundLink>
            </nav>
            <nav
                className={`${isMobile
                ? "flex"
                : "hidden"} md:hidden dark:bg-gray-900 flex-col justify-center items-start py-2 border-b-2 border-gray-400`}>
                <a
                    href="/"
                    className="w-full h-full text-left text-base dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:text-gray-400 py-2 px-4">Home</a>
                <a
                    href="/#news"
                    className="w-full h-full text-left text-base dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:text-gray-400 py-2 px-4">News</a>
                <a
                    href="/map"
                    className="w-full h-full text-left text-base dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:text-gray-400 py-2 px-4">Map</a>
                <a
                    href="/developer"
                    className="w-full h-full text-left text-base dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:text-gray-400 py-2 px-4">Developer</a>
                <OutboundLink
                    href="https://github.com/SatvikVirmani/we-covid-track"
                    className="w-full h-full text-left text-base dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:text-gray-500 py-2 px-4">
                    <FontAwesomeIcon icon={faGithub}/>
                    View on Github
                </OutboundLink>
                <ThemeToggle/>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
