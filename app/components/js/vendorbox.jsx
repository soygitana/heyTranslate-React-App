import React, { Component } from "react";
import "../styles/main.scss";
import axios from 'axios';


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

    // creating functions valueHandler for onChange event in input, changing state value to event value

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

    // creating function parseAllElement to get all data from database

    parseAllElement(data) {
        let results = data;
        let output = [];

        for (let key in results) { // array iteration
            let element = results[key];
            for (let key2 in element) { // people iteration
                let element2 = element[key2];
                output.push(element2);
            }
        }
        return output;
    }

    // fetching data with axios from local db

    componentDidMount() {
        axios.get('http://localhost:3000/data')
            .then(res => {
                console.log(res.data);
                this.setState({
                    data: res.data,
                    results: this.parseAllElement(res.data)

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
                    <option value="1">select vendor</option>
                    {
                        this.state.results.map(result => (
                            <option key={result.id} > {result.name} {result.lastname}</option>
                        ))
                    }
                </select>
                <form className="app-pricebox">
                    <p className="description">price rate:</p>
                    <input onChange={this.valueHandler} type="number" className="quantity" value={this.state.value1} />
                    <p className="description">word count:</p>
                    <input onChange={this.valueHandler2} type="number" className="quantity" value={this.state.value2} />
                    <p className="total">Total: <span id="total">${this.state.value1 * this.state.value2}</span></p>
                </form>
            </div >
        )
    }
}

export default VendorBox;