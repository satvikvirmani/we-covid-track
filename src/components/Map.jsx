import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl';
import "../styles/map.css"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0dmlrdmlybWFuaSIsImEiOiJja2VqeGpiODExeGdyMnlveXN0NXIwNm02In0.MFR4g' +
        'Jp7jraf-bPV59eBjA';
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://disease.sh/v3/covid-19/countries',
            headers: {}
        };

        axios(config).then((response) => {
            var matchExpression = [
                'match',
                ['get', 'iso_3166_1_alpha_3']
            ];
            response
                .data
                .forEach((row) => {
                    if (row.countryInfo.iso3 !== null) {
                        if (row.cases >= 0 && row.cases < 10) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(239, 246, 255)');
                        } else if (row.cases >= 10 && row.cases < 100) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(219, 234, 254)');
                        } else if (row.cases >= 100 && row.cases < 1000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(191, 219, 254)');
                        } else if (row.cases >= 1000 && row.cases < 10000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(147, 197, 253)');
                        } else if (row.cases >= 10000 && row.cases < 100000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(96, 165, 250)');
                        } else if (row.cases >= 100000 && row.cases < 1000000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(59, 137, 246)');
                        } else if (row.cases >= 1000000 && row.cases < 10000000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(37, 99, 235)');
                        } else if (row.cases >= 10000000 && row.cases < 100000000) {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(29, 78, 216)');
                        } else {
                            matchExpression.push(row.countryInfo.iso3, 'rgb(30, 64, 175)');
                        }
                    }
                });
            matchExpression.push('rgb(17, 24, 39)');
            this.setState({data: response.data})
            var map = new mapboxgl.Map({
                container: this.map,
                style: 'mapbox://styles/satvikvirmani/ckomwgbwn9c9017n7sj7a3nto',
                center: [
                    78.9629, 20.5937
                ],
                zoom: 2.5
            });
            // Data: UN Human Development Index 2017 Europe extract Source:
            // https://ourworldindata.org/human-development-index
            map.on('load', function () {
                // Add source for country polygons using the Mapbox Countries tileset The
                // polygons contain an ISO 3166 alpha-3 code which can be used to for joining the
                // data https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
                map.addSource('countries', {
                    "type": "vector",
                    "url": "mapbox://mapbox.country-boundaries-v1"
                });

                // Build a GL match expression that defines the color for every vector tile
                // feature Use the ISO 3166-1 alpha 3 code as the lookup key for the country
                // shape Add layer from the vector tile source to create the choropleth Insert
                // it below the 'admin-1-boundary-bg' layer in the style
                map.addLayer({
                    'id': 'countries-join',
                    'type': 'fill',
                    'source': 'countries',
                    'source-layer': 'country_boundaries',
                    'paint': {
                        'fill-color': matchExpression
                    }
                }, 'admin-1-boundary-bg');
            });
            var popup = new mapboxgl.Popup({closeButton: true})
            map.on('click', 'countries-join', (e) => {
                map
                    .getCanvas()
                    .style
                    .cursor = 'pointer';
                var html = this.getHTMLData(e.features[0].properties.iso_3166_1_alpha_3)

                popup.setLngLat(e.lngLat)
                popup.setHTML(html)
                popup.addTo(map);
            })
            map.on('mouseenter', 'countries-join', function () {
                map
                    .getCanvas()
                    .style
                    .cursor = 'pointer';
            });
            map.on('mouseleave', 'countries-join', function () {
                map
                    .getCanvas()
                    .style
                    .cursor = '';
            });

        }).catch((error) => {});
    }
    getHTMLData = (code) => {
        try {
            var info = (this.state.data).filter(country => country.countryInfo.iso3 === code);
            return (`<img src="${info[0].countryInfo.flag}" class="w-24 rounded-lg mx-auto ring-2 ring-gray-500">
                <h1 class="text-base mb-2 text-center font-medium">${info[0].country}</h1>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Total</h1>
                <h1 class="text-2xl font-bold text-blue-500 inline align-middle slashed-zero">${parseInt(info[0].cases).toLocaleString()}</h1><h1 class="text-xl font-semibold text-blue-500 inline align-middle slashed-zero"> +${parseInt(info[0].todayCases).toLocaleString()}</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Recovered</h1>
                <h1 class="text-2xl font-bold text-green-500 inline align-middle slashed-zero">${parseInt(info[0].recovered).toLocaleString()}</h1><h1 class="text-xl font-semibold text-green-500 inline align-middle slashed-zero"> +${parseInt(info[0].todayRecovered).toLocaleString()}</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Critical</h1>
                <h1 class="text-2xl font-bold text-yellow-500 inline align-middle slashed-zero">${parseInt(info[0].critical).toLocaleString()}</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Deaths</h1>
                <h1 class="text-2xl font-bold text-red-500 inline align-middle slashed-zero">${parseInt(info[0].deaths).toLocaleString()}</h1><h1 class="text-xl font-semibold text-red-500 inline align-middle slashed-zero"> +${parseInt(info[0].todayDeaths).toLocaleString()}</h1>
                </div>`)
        } catch (error) {
            return (`<img src="" class="w-24 rounded-lg mx-4">
                <h1 class="text-base mb-2 text-center font-medium">Unknown</h1>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Total</h1>
                <h1 class="text-2xl font-bold text-blue-500 inline align-middle">Unknown</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Recovered</h1>
                <h1 class="text-2xl font-bold text-green-500 inline align-middle">Unknown</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Critical</h1>
                <h1 class="text-2xl font-bold text-yellow-500 inline align-middle">Unknown</h1>
                </div>
                <div class="my-1 mx-1">
                <h1 class="text-sm">Deaths</h1>
                <h1 class="text-2xl font-bold text-red-500 inline align-middle">Unknown</h1>
                </div>`)
        }
    }
    errorRemoval = () => {
        this.setState({fetchError: false})
    }
    render() {
        return (
            <React.Fragment>
                <div className="w-full h-screen dark:bg-gray-900 pt-4 px-2 sm:px-4">
                    <div
                        ref={el => this.map = el}
                        id="map"
                        className="box-border w-full h-full rounded-xl border-2 border-gray-400"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Map;