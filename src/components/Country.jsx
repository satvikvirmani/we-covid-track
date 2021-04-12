import React, { Component } from 'react'
import Autocomplete from './Autocomplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faViruses, faVirusSlash } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

class Country extends Component {
    state = { 
        fetching: true,
        countries: [],
        codes: [],
        currentCountry: '',
        currentCode: '',
        ipError: false,
        data: [],
        fetchError: false
     }

     componentDidMount(){
        fetch('Country.json',{
           headers : { 
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            }
         }
         )
           .then(function(response){
             return response.json();
           })
           .then((json) =>  {
             var countries = json.map(function(x){ return x.name; })
             var codes = json.map(function(x){ return x.alpha2; })
             this.setState({
                 countries: countries,
                 codes: codes
             },() => {
                fetch('https://extreme-ip-lookup.com/json/')
                .then( res => res.json())
                .then((response) => {

                    this.setState({
                        currentCountry: response.country,
                        currentCode: response.countryCode
                    }, () => {
                        this.getData(response.countryCode)
                    })
                })
                .catch((data, status) => {
                    this.setState({
                        ipError: true,
                        currentCountry: 'Canada', //Default Country
                        currentCode: 'CA' //Default Code
                    }, () => {
                        this.getData('CA') //Error Fetch on Default Code
                    })
                })
             })
           });

      }

      updateData = (childData) => {
        var code = this.state.codes[this.state.countries.indexOf(childData)]
          this.setState({
              currentCountry: childData,
              currentCode: code
          },() => {
              this.getData(this.state.currentCode)
          })
     }

     getData = (toSearch) => {
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://corona.lmao.ninja/v2/countries/' + toSearch + '?yesterday=false&strict&query ',
          headers: { }
        };
        
        axios(config)
        .then((response) => {
            this.setState({
                fetching: false,
                data: response.data
            })
        })
        .catch((error) => {
          this.setState({
              fetchError: true
          })
        });
     }
     errorRemoval = () => {
        this.setState({
            fetchError: false
        })
    }
    render() { 
        return ( 
            <div className="column m-4 box">
                <div className="columns m-4">
                    <div className="column is-6 is-flex is-align-items-center">
                        <p className="title is-4">
                            {this.state.fetching ? 'Country' : this.state.currentCountry} Cases
                        </p>
                    </div>
                    <div className="column is-6 py-0">
                    <Autocomplete name="country" label="Country" placeholder="Search Your Country" data={this.state.countries} parentCallback={this.updateData}/>
                    </div>
                </div>
                {this.state.fetchError ? <article className="message">
                                    <div className="message-header">
                                        <p>Error</p>
                                        <button className="delete" aria-label="delete" onClick={this.errorRemoval}></button>
                                    </div>
                                    <div className="message-body">
                                        Sorry unable to fetch information
                                    </div>
                                    </article>: ''}
                <div className="columns m-4">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                <FontAwesomeIcon icon={faViruses} size='2x' />
                            </div>
                            <div className="column is-9">
                          <div className="container">
                            <h1 className="subtitle is-5 has-text-left">Total Cases</h1>
                            </div>
                            <div className="container">
                                {this.state.fetching ? <Loader /> :  <h1 className="title is-4 has-text-left">{parseInt(this.state.data.cases).toLocaleString()}</h1>}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                            <FontAwesomeIcon icon={faVirusSlash} size='2x' />
                            </div>
                            <div className="column is-9">
                          <div className="container">
                            <h1 className="subtitle is-5 has-text-left">Total Recovered</h1>
                            </div>
                            <div className="container">
                            {this.state.fetching ? <Loader /> :  <h1 className="title is-4 has-text-left">{parseInt(this.state.data.recovered).toLocaleString()}</h1>}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns m-4">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                            <FontAwesomeIcon icon={faViruses} size='2x' />
                            </div>
                            <div className="column is-9">
                          <div className="container">
                            <h1 className="subtitle is-5 has-text-left">Total Critical</h1>
                            </div>
                            <div className="container">
                            {this.state.fetching ? <Loader /> :  <h1 className="title is-4 has-text-left">{parseInt(this.state.data.critical).toLocaleString()}</h1>}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                            <FontAwesomeIcon icon={faVirus} size='2x' />
                            </div>
                            <div className="column is-9">
                          <div className="container">
                            <h1 className="subtitle is-5 has-text-left">Total Deaths</h1>
                            </div>
                            <div className="container">
                            {this.state.fetching ? <Loader /> :  <h1 className="title is-4 has-text-left">{parseInt(this.state.data.deaths).toLocaleString()}</h1>}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
         );
    }
}
 
export default Country;