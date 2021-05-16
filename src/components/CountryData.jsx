import React, {Component} from 'react'
import DataColumn from "./DataColumn"
import CountryInput from "./CountryInput"
import {CountryGraphTotal, CountryGraphRecovered, CountryGraphCritical, CountryGraphDeaths} from './MiniGraph'

class CountryData extends Component {
    state = {
        CountryData: {
            "cases": "Loading",
            "recovered": "Loading",
            "critical": "Loading",
            "deaths": "Loading",
            "todayCases": "Loading",
            "todayRecovered": "Loading",
            "todayDeaths": "Loading",
            childAnimate: false,
            selectedCountry: "",
            textClass: ""
        }
    }
    componentDidMount() {
        this.fetchCountryData()
        this.setState({selectedCountry: "India", textClass: "text-4xl"})
    }
    fetchCountryData = (code = "ind", country = "India") => {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'https://disease.sh/v3/covid-19/countries/' + code + '?yesterday=false&strict=false',
            headers: {}
        };

        axios(config).then((response) => {
            this.setState({CountryData: response.data, childAnimate: true, selectedCountry: country})
        }).catch((error) => {
            console.log(error);
            this.setState({selectedCountry: "India", textClass: "text-4xl"})
        })

    }
    handleCallback = (selectedCode, selectedCountry) => {
        this.fetchCountryData(selectedCode, selectedCountry)
        if (selectedCountry.length > 12) {
            this.setState({textClass: "text-2xl"})
        } else {
            this.setState({textClass: "text-4xl"})
        }
    }
    render() {
        return (
            <div
                className="mx-2 sm:mx-9 box-content dark:bg-gray-800 rounded-2xl bg-purple-50 border-2 border-gray-200 dark:border-gray-800 p-0 lg:py-4 lg:px-8 xl:px-12">
                <div
                    className="flex flex-col sm:flex-row justify-evenly items-center sm:justify-evenly lg:justify-between gap-2 sm:gap-0 my-4">
                    <div>
                        <h1 className={`${this.state.textClass} dark:text-gray-300 font-medium`}>{this.state.selectedCountry}</h1>
                    </div>
                    <CountryInput parentCallback={this.handleCallback}/>
                </div>
                <div className="flex flex-row justify-evenly my-4">
                    <DataColumn
                        color="#03D9FE"
                        label="Total"
                        todayData={`+${this
                        .state
                        .CountryData
                        .todayCases
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .CountryData
                        .cases
                        .toLocaleString()}>
                        <CountryGraphTotal color="#03D9FE" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#2DFA7C"
                        label="Recovered"
                        todayData={`+${this
                        .state
                        .CountryData
                        .todayRecovered
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .CountryData
                        .recovered
                        .toLocaleString()}>
                        <CountryGraphRecovered color="#2DFA7C" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
                <div className="flex flex-row justify-evenly my-4">
                    <DataColumn
                        color="#BFD200"
                        label="Critical"
                        todayData="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                        totalData={this
                        .state
                        .CountryData
                        .critical
                        .toLocaleString()}>
                        <CountryGraphCritical color="#BFD200" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#FB6376"
                        label="Deaths"
                        todayData={`+${this
                        .state
                        .CountryData
                        .todayDeaths
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .CountryData
                        .deaths
                        .toLocaleString()}>
                        <CountryGraphDeaths color="#FB6376" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
            </div>
        );
    }
}

export default CountryData;