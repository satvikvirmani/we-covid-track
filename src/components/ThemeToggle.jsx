import React, {Component} from 'react';
import {motion} from 'framer-motion';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

class ThemeToggle extends Component {
    state = {
        isDark: true,
        flexDir: null
    }
    handleChange = () => {
        var x = this.state.isDark
        if (typeof window !== 'undefined') {
            localStorage.theme = !x
                ? 'dark'
                : 'light'
        }
        this.setState({
            isDark: !x,
            flexDir: x
                ? 'justify-end'
                : 'justify-start'
        })
    }
    componentDidUpdate() {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
                document
                    .documentElement
                    .classList
                    .add('dark')
            } else {
                document
                    .documentElement
                    .classList
                    .remove('dark')
            }
        }
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
                document
                    .documentElement
                    .classList
                    .add('dark')
                localStorage.theme = 'dark';
                this.setState({isDark: true, flexDir: "justify-start"})
            } else {
                document
                    .documentElement
                    .classList
                    .remove('dark')
                this.setState({isDark: true, flexDir: "justify-end"})
            }
        }
    }
    render() {
        return (
            <div
                className={`my-2 mx-4 md:m-0 w-16 h-8 dark:bg-gray-700 bg-gray-200 flex-row items-center rounded-full relative cursor-pointer flex ${this.state.flexDir}`}
                onClick={this.handleChange}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute left-0 m-1 z-10 dark:text-yellow-300 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                </svg>
                <motion.div
                    className="w-6 h-6 dark:bg-purple-500 bg-purple-500 rounded-full z-20 m-1"
                    layout
                    transition={spring}/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute right-0 m-1 z-10 text-blue-300"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
            </div>
        );
    }
}

export default ThemeToggle;