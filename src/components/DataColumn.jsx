import React from "react"
import {motion} from "framer-motion"

const DataColumn = (props) => {
    return (
        <motion.div
            className="mx-1 lg:mx-8 bg-blend-lighten box-border text-center bg-purple-100 dark:bg-gray-700 rounded-xl w-40 md:w-44 2xl:w-48 ring-2 ring-purple-500 dark:ring-gray-700 cursor-pointer"
            whileHover={{
            scale: 1.05
        }}
            data-category={props.label}>
            <p
                className="my-6 text-xl"
                style={{
                color: props.color
            }}>{props.label}</p>
            <div
                className="my-6"
                style={{
                color: props.color
            }}>
                <p
                    className="text-xl font-medium slashed-zero"
                    style={{
                    color: props.color
                }}>{props.todayData}</p>
                <p
                    className="text-2xl sm:text-3xl font-bold slashed-zero"
                    style={{
                    color: props.color
                }}>{props.totalData}</p>
            </div>
            {props.children}
        </motion.div>
    )
}

export default DataColumn