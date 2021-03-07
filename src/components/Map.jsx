import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0dmlrdmlybWFuaSIsImEiOiJja2VqeGpiODExeGdyMnlveXN0NXIwNm02In0.MFR4gJp7jraf-bPV59eBjA';
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
 

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fetchError: false
         }
    }

    componentDidMount() {         
                var axios = require('axios');
        
                var config = {
                  method: 'get',
                  url: 'https://corona.lmao.ninja/v2/countries?&sort',
                  headers: { }
                };
                
                axios(config)
                .then((response) => {
                            var countryData = (response.data).map((item) => { 
                                var hdi = 'rgb(238,238,238)'
                                if (parseInt(item.cases) > 0 && parseInt(item.cases) < 1000) {
                                    hdi = 'rgb(238,238,238)'
                                } else if (parseInt(item.cases) > 1000 && parseInt(item.cases) < 10000) {
                                    hdi = 'rgb(156, 233, 252)'
                                } else if (parseInt(item.cases) > 10000 && parseInt(item.cases) < 100000) {
                                    hdi = 'rgb(107, 202, 250)'
                                } else if (parseInt(item.cases) > 100000 && parseInt(item.cases) < 1000000) {
                                    hdi = 'rgb(35, 151, 246)'
                                } else if (parseInt(item.cases) > 1000000 && parseInt(item.cases) < 10000000) {
                                    hdi = 'rgb(12,99,231)'
                                } else {
                                    hdi = 'rgb(46, 25, 230)'
                                };
                                return {
                                    "codeISO2": item.countryInfo.iso2,
                                    "codeISO3": item.countryInfo.iso3,
                                    "cases": item.cases,
                                    "todayCases": 13,
                                    "deaths": 2433,
                                    "todayDeaths": 1,
                                    "recovered": 48834,
                                    "todayRecovered": 14,
                                    "active": 4350,
                                    "critical": 1035,
                                    "casesPerOneMillion": 1409,
                                    "deathsPerOneMillion": 62,
                                    "tests": 286137,
                                    "testsPerOneMillion": 7247,
                                    "population": 39484888,
                                    "continent": "Asia",
                                    "oneCasePerPeople": 710,
                                    "oneDeathPerPeople": 16229,
                                    "oneTestPerPeople": 138,
                                    "activePerOneMillion": 110.17,
                                    "recoveredPerOneMillion": 1236.78,
                                    "criticalPerOneMillion": 26.21,
                                    "hdi": hdi
                                }
                            });
                            this.setState({
                                data: response.data
                            })
                            var map = new mapboxgl.Map({
                                container: this.map,
                                style: 'mapbox://styles/mapbox/dark-v10',
                                center: [78.9629, 20.5937],
                                zoom: 2
                            });
                            var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
                            countryData.forEach((row) => {
                                if(row['codeISO3'] !== null) {
                                    matchExpression.push(row['codeISO3'], row['hdi']);
                              }
                            });
                              matchExpression.push('rgba(0, 0, 0, 0)');
                            // Data: UN Human Development Index 2017 Europe extract
                            // Source: https://ourworldindata.org/human-development-index
                            map.on('load', function () {
                                // Add source for country polygons using the Mapbox Countries tileset
                                // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data
                                // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
                                map.addSource('countries', {
                                  "type": "vector",
                                  "url": "mapbox://mapbox.country-boundaries-v1"
                                });
                        
                                // Build a GL match expression that defines the color for every vector tile feature
                                // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
                                // Add layer from the vector tile source to create the choropleth
                                // Insert it below the 'admin-1-boundary-bg' layer in the style
                                map.addLayer(
                                    {
                                        'id': 'countries-join',
                                        'type': 'fill',
                                        'source': 'countries',
                                        'source-layer': 'country_boundaries',
                                        'paint': {
                                            'fill-color': matchExpression
                                        }
                                    },
                                    'admin-1-boundary-bg'
                                );
                            });
                            var popup =  new mapboxgl.Popup(
                                {closeButton: true}
                            )
                            map.on('click','countries-join', (e) => {
                                map.getCanvas().style.cursor = 'pointer';
                                var html = this.getHTMLData(e.features[0].properties.iso_3166_1_alpha_3)

                    popup.setLngLat(e.lngLat)
                                popup.setHTML(html)
                                popup.addTo(map);
                            })
                            map.on('mouseenter', 'countries-join', function () {
                                map.getCanvas().style.cursor = 'pointer';
                            });
                            map.on('mouseleave', 'countries-join', function () {
                                map.getCanvas().style.cursor = '';
                            });
        
                })
                .catch((error) => {
                  this.setState({
                      fetchError: true
                  })
                });
    }
    getHTMLData = (code) => {
        try {
            var info = (this.state.data).filter(country => country.countryInfo.iso3 === code);
            return (
                `<figure class="image popup-image">
                    <img src="${info[0].countryInfo.flag}">
                </figure>
                <h1 class="mb-0 title is-4">${info[0].country}</h1>
                <br/>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Confirmed</h3><h1 class="title is-4">${parseInt(info[0].cases).toLocaleString()}</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Recovered</h3><h1 class="title is-4">${parseInt(info[0].recovered).toLocaleString()}</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Critical</h3><h1 class="title is-4">${parseInt(info[0].critical).toLocaleString()}</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Deaths</h3><h1 class="title is-4">${parseInt(info[0].deaths).toLocaleString()}</h1>
                </div>`
            )
        } catch (error) {
            return (
                `<h1 class="mb-0 title is-4">Disputed Area</h1>
                <br/>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Confirmed</h3><h1 class="title is-4">Unknown</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Recovered</h3><h1 class="title is-4">Unknown</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Critical</h3><h1 class="title is-4">Unknown</h1>
                </div>
                <div class="mb-4">
                <h3 class="subtitle is-6">Total Deaths</h3><h1 class="title is-4">Unknown</h1>
                </div>`
            )
        }
    }
    errorRemoval = () => {
        this.setState({
            fetchError: false
        })
    }
    render() { 
        return ( 
            <React.Fragment>
            <div>
            {this.state.fetchError ? <article className="message">
            <div className="message-header">
                <p>Error</p>
                <button className="delete" aria-label="delete" onClick={this.errorRemoval}></button>
            </div>
            <div className="message-body">
                Sorry unable to fetch map
            </div>
            </article>: ''}
            </div>
            <div ref={el => this.map = el} id="map" style={{width: '100%',height: '600px'}} />
            </React.Fragment>
         );
    }
}
 
export default Map;