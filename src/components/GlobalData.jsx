import React, {Component} from 'react'
import DataColumn from "./DataColumn"
import {GlobalGraphTotal, GlobalGraphRecovered, GlobalGraphCritical, GlobalGraphDeaths} from './MiniGraph'

class GlobalData extends Component {
    state = {
        GlobalData: {
            "TotalCases": "Loading",
            "NewCases": "Loading",
            "TotalRecovered": "Loading",
            "NewRecovered": "Loading",
            "ActiveCases": "Loading",
            "TotalDeaths": "Loading",
            "NewDeaths": "Loading",
            childAnimate: false
        }
    }
    componentDidMount() {
        this.fetchGlobalData()
    }
    fetchGlobalData = () => {
        var axios = require('axios');
        var config = {
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
            headers: {
              'X-RapidAPI-Key': '5cefe9975dmsh908a1edb2653d53p146c4djsne6cc8fbe18f4',
              'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
        };

        axios(config).then((response) => {
            this.setState({GlobalData: response.data[0], childAnimate: true})
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
                            .NewCases.toLocaleString()
                            }`}
                        totalData={`+${
                            this.state.GlobalData.TotalCases.toLocaleString()
                            }`}>
                        <GlobalGraphTotal color="#03D9FE" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#2DFA7C"
                        label="Recovered"
                        todayData={`+${
                            this.state.GlobalData.NewRecovered.toLocaleString()
                            }`}
                        totalData={`+${
                            isNaN(this.state.GlobalData.TotalRecovered) ? this.state.GlobalData.TotalRecovered.toLocaleString() : parseInt(this.state.GlobalData.TotalRecovered).toLocaleString()}`}>
                        <GlobalGraphRecovered color="#2DFA7C" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
                <div className="flex flex-row justify-evenly my-4">
                    <DataColumn
                        color="#BFD200"
                        label="Critical"
                        todayData="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                        totalData={`+${
                            this.state.GlobalData.ActiveCases.toLocaleString()
                            }`}>
                        <GlobalGraphCritical color="#BFD200" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                    <DataColumn
                        color="#FB6376"
                        label="Deaths"
                        todayData={`+${
                            this.state.GlobalData.NewDeaths.toLocaleString()
                            }`}
                        totalData={`+${
                            this.state.GlobalData.TotalDeaths.toLocaleString()
                            }`}>
                        <GlobalGraphDeaths color="#FB6376" animateNow={this.state.childAnimate}/>
                    </DataColumn>
                </div>
            </div>
        );
    }
}

export default GlobalData;
