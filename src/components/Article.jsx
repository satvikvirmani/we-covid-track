import React from "react"
import {motion} from "framer-motion"
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Article = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <motion.div
                className="box-content gap-4 p-2 flex flex-col lg:flex-row justify-between dark:bg-gray-800 w-11/12 mx-auto my-8 rounded-2xl ring-2 ring-purple-500 dark:ring-gray-800 bg-purple-100 shadow-xl"
                whileHover={{
                scale: 1.05
            }}>
                <div className="max-w-6xl w-full lg:w-80 grid place-items-center">
                    <LazyLoadImage src={props.imageSrc} className="w-full sm:w-72 lg:w-full" alt="newsImage"/>
                </div>
                <div className="flex-1 flex flex-col items-start gap-6 justify-between">
                    <p className="text-2xl dark:text-gray-200">
                        {props.title}
                    </p>
                    <p className="text-md dark:text-gray-400">
                        {props.content}
                    </p>
                    <p className="text-sm dark:text-gray-500">
                        Source: {props.sourceName}
                        | {props.publishedAt}
                    </p>
                </div>
            </motion.div>
        </a>
    )
}

export default Article