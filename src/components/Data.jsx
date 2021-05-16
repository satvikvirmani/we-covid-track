import React from 'react';
import GlobalData from './GlobalData'
import CountryData from './CountryData'

const Data = () => {
    return (
        <div className="w-full flex flex-col xl:flex-row justify-evenly gap-8 xl:gap-0">
            <GlobalData/>
            <CountryData/>
        </div>
    )
}

export default Data