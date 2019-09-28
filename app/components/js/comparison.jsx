import React, { Component } from "react";
import "../styles/main.scss";

import Footer from './footer.jsx';
import axios from 'axios'

// creating Comparison (includes: Header, VendorBox and Footer components) component which is rendering vendor comparison section of the app 


class VendorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            page: 1,
            data: [],
            value1: 0.1,
            value2: 0
        };
        this.valueHandler = this.valueHandler.bind(this);
        this.valueHandler2 = this.valueHandler2.bind(this);
    }

    valueHandler(event) {
        this.setState({
            value1: parseFloat(event.target.value),
        })
    }

    valueHandler2(event) {
        this.setState({
            value2: parseFloat(event.target.value),
        })
    }



    componentDidMount() {
        axios.get('http://localhost:3000/data')
            .then(res => {
                console.log(res.data['page']);
                this.setState({
                    data: res.data,
                    results: res.data['page' + this.state.page]
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (

            <div className="app-vendorbox">
                <h2>select your vendor</h2>
                <select className="selectpicker" data-show-subtext="true">
                    {
                        this.state.results.map(result => (
                            <option key={result.id} > {result.name} {result.lastname}</option>
                        ))
                    }
                </select>


                <form className="app-price">
                    <p className="description">price rate:</p>
                    <input onChange={this.valueHandler} type="text" className="quantity" value={this.state.value1} />
                    <p className="description">word count:</p>
                    <input onChange={this.valueHandler2} type="text" className="quantity" value={this.state.value2} />
                    <p className="total">Total: <span id="total">${this.state.value1 * this.state.value2}</span></p>



                </form>





            </div >

        )
    }
}


class VendorPanel extends Component {
    render() {
        return (
            <div className="app-container col-12">
                <div className="app-vendorpanel">
                    <VendorBox />
                    <VendorBox />
                    <VendorBox />
                </div>
            </div>
        )
    }
}


class Comparison extends Component {
    render() {
        return (
            <>
                <VendorPanel />
            </>
        )
    }
}
export default Comparison;