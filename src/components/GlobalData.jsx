import React, {Component} from 'react'
import DataColumn from "./DataColumn"
import {GlobalGraphTotal, GlobalGraphRecovered, GlobalGraphCritical, GlobalGraphDeaths} from './MiniGraph'

class GlobalData extends Component {
    state = {
        GlobalData: {
            "cases": "Loading",
            "recovered": "Loading",
            "critical": "Loading",
            "deaths": "Loading",
            "todayCases": "Loading",
            "todayRecovered": "Loading",
            "todayDeaths": "Loading",
            childAnimate: false
        }
    }
    componentDidMount() {
        this.fetchGlobalData()
    }
    fetchGlobalData = () => {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'https://corona.lmao.ninja/v3/covid-19/all?yesterday=true',
            headers: {}
        };

        axios(config).then((response) => {
            this.setState({GlobalData: response.data, childAnimate: true})
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div
                className="mx-2 sm:mx-9 box-content dark:bg-gray-800 rounded-2xl bg-purple-50 border-2 border-gray-200 dark:border-gray-800 p-0 lg:py-4 lg:px-8 xl:px-12 2x:py-16">
                <div
                    className="flex flex-col sm:flex-row justify-evenly items-center sm:justify-evenly lg:justify-between gap-2 sm:gap-0 my-4">
                    <div>
                        <h1 className="text-4xl dark:text-gray-300 font-medium">Global</h1>
                    </div>
                    <div className="w-64"></div>
                </div>
                <div className="flex flex-row justify-evenly my-4">
                    <DataColumn
                        color="#03D9FE"
                        label="Total"
                        todayData={`+${this
                        .state
                        .GlobalData
                        .todayCases
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .GlobalData
                        .cases
                        .toLocaleString()}>
                        <GlobalGraphTotal color="#03D9FE" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#2DFA7C"
                        label="Recovered"
                        todayData={`+${this
                        .state
                        .GlobalData
                        .todayRecovered
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .GlobalData
                        .recovered
                        .toLocaleString()}>
                        <GlobalGraphRecovered color="#2DFA7C" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
                <div className="flex flex-row justify-evenly my-4">
                    <DataColumn
                        color="#BFD200"
                        label="Critical"
                        todayData="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                        totalData={this
                        .state
                        .GlobalData
                        .critical
                        .toLocaleString()}>
                        <GlobalGraphCritical color="#BFD200" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#FB6376"
                        label="Deaths"
                        todayData={`+${this
                        .state
                        .GlobalData
                        .todayDeaths
                        .toLocaleString()}`}
                        totalData={this
                        .state
                        .GlobalData
                        .deaths
                        .toLocaleString()}>
                        <GlobalGraphDeaths color="#FB6376" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
            </div>
        );
    }
}

export default GlobalData;
