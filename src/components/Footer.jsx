import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-3 text-center dark:text-gray-400">
            <p>
                Made with
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-1 h-5 w-5 inline text-red-600 dark:text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"/>
                </svg>
                by Satvik Virmani
            </p>
            <p className="is-size-7">
                Copyright &#169;
                <span className="mx-1">{new Date().getFullYear()}</span>
                Covid Track
            </p>
        </footer>
    )
}

export default Footer