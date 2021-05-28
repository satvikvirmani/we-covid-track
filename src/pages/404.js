import React from 'react';
import {Link} from "gatsby"
import SEO from "../components/seo"

if (typeof window !== 'undefined'){
    document.documentElement.lang = "en"
}

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <SEO/>
            <div className="w-screen h-screen py-16 px-4 text-center">
                <img
                    src="https://res.cloudinary.com/wecloud/image/upload/v1621149835/we-covid-track/notFound_ljjvim.svg"
                    alt="Page not found"
                    className="w-full max-w-3xl mx-auto mb-8"/>
                <h1 className="text-4xl font-medium">Oops! Page not found</h1>
                <Link to="/" className="text-2xl my-4 text-purple-500 font-medium">Go Home</Link>
            </div>
        </React.Fragment>
    )
}

export default NotFoundPage