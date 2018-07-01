import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            messageList: []
        };
    }

    // dummy method to get testing going
    sumNum(num1, num2) {
        let total = num1 + num2
        return total
    }

    render() {
        return(
            <div>
                Hello World!
                </div>
        )
    }

}

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;