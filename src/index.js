import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    state = {
        number1: 0,
        number2: 0,
        showNumbers: false
    }
    saveNumber1 = (e) => {
        this.setState({number1: e.target.value});
    }
    saveNumber2 = (e) => {
        this.setState({number2: e.target.value});
    }
    addNumbers = () => {
        const addedvalue = Number(this.state.number1) + Number(this.state.number2);
        this.setState({
            answerNumber: addedvalue
        })
    }
    render(){
        return (
            <div>
                <h1>Input Numbers below to Add :3</h1>
                <input type="number" onChange={this.saveNumber1} />
                <input type="number" onChange={this.saveNumber2} />
                <button onClick={this.addNumbers}>Add</button>
                <p>{this.state.answerNumber}</p>
            </div>
        )
    }
    
}

ReactDom.render(<App />,document.getElementById('root'))
