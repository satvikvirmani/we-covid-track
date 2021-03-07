import React, { Component } from 'react';

class Footer extends Component {
    state = { 
        currentYear: ''
     }
     componentDidMount(){
         var date = new Date()
         var year = date.getFullYear()
         this.setState({
             currentYear: year
         })
     }
    render() { 
        return ( 
            <footer className="footer p-4">
                <div className="content has-text-centered mx-4">
                    <p className="subtitle is-6">
                        Copyright &#9400; {this.state.currentYear} Covid Track by <a href="http://satvikvirmani.github.io" className="title is-6">Satvik Virmani</a>
                    </p>
                </div>
            </footer>
         );
    }
}
 
export default Footer;