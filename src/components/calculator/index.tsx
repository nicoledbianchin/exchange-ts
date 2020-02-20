import React from 'react';
import api from '../../services/source/api';

export interface IState {
    base?: string;
    other?: string;
    value?: number;
    converted?: number;
    response?: string;
    currencies?: string[];
}

export default class Calculator extends React.Component<IState>{
   readonly state = { base: "USD", other: "EUR", value: 0, converted: 0, response: "", currencies: ["AUD", "CAD", "CHF", "CNY", "INR", "USD", "EUR", "GBP", "JPY", "NZD"] };

    componentDidMount(){
        this.loadRates(this.state.base);
    }

    loadRates = async (base: any) => {
        const response = await api.get(`latest?base=${base}`);
        this.setState({
            response: response.data.rates.EUR
        })
    }

    makeSelection = (event: { target: { name: any; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        }, this.recalculate);
        this.loadRates(this.state.base);
    }

    changeValue = (event: { target: { value: any; }; }) => {
        this.setState({
            value: event.target.value,
            converted: null
        }, this.recalculate)
    }

    recalculate = () => {
        const value = this.state.value;
        if (isNaN(value)) {
            return;
        }
        this.setState({
            converted: parseFloat(this.state.response) * value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <select onChange={this.makeSelection} name="base" value={this.state.base}>
                        {this.state.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                    <input type='number' onChange={this.changeValue} value={this.state.value}/>
                </div>

                <div>
                    <select onChange={this.makeSelection} name="other" value={this.state.other}>
                        {this.state.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                    <input disabled={true} value={this.state.converted === null ? "Calculating..." : this.state.converted}/>
                </div>
            </div>
        );
    }
}
