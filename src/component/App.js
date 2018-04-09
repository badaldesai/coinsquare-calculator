import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { getSolution } from '../calculate/getSolution';

import '../index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solution: '',
            equation: '',
        }
    }

    handleSolution = () => {
        let answer;
        try{
            answer = getSolution(this.state.equation);
            if(answer === 'NaN') {
                throw new Error('Invalid Expression');
            }
        } catch (error) {
            answer = `${error}. Press AC`;
        }
        this.setState({
            solution: answer,
            equation: answer,
        });
    }

    handleClick = (buttonName) => {
       switch(buttonName) {
           case '=': {
               this.handleSolution();
               break;
           }
           case 'AC': {
               this.setState({
                   equation: '',
                   solution: ''
               });
               break;
           }
           default: {
               const currentEquation = this.state.equation + buttonName;
               this.setState({equation: currentEquation});
               break;
           }
       }
    }

    handleChange = (value) => {
        switch(value) {
            default: {
                this.setState({equation: value, solution: ''})
                break;
            }
        }
    }

    render() {
        return (
            <div className="calculator-app">
                <Display 
                    value = {this.state.equation || this.state.solution }
                    changeHandler={this.handleChange}
                    submitHandler={this.handleSolution}
                />
                <ButtonPanel
                    clickHandler={this.handleClick}
                />
            </div>
        )
    }
}

export default App;