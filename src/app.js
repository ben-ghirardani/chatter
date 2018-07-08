import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EnterMessageForm from './EnterMessageForm';

class App extends Component {

    constructor() {
        super();
        this.state = {
            messageList: [],
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMessageToList = this.addMessageToList.bind(this);
    }

    handleChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit(event) {
        this.addMessageToList();
        console.log('Form Value: ' + this.state.message)
        event.preventDefault();
    }

    addMessageToList() {
        let newMessage = this.state.message
        let messageArray = this.state.messageList
        messageArray.push(newMessage)
        this.setState({messageList: messageArray})
    }

    render() {
        return(
            <form id="message-form" onSubmit={this.handleSubmit} >
                <label>Test form</label>
                <input id="message" type="text"  value={this.state.message} onChange={this.handleChange} ></input>
                <input id="submit" type="submit" value="Submit" ></input>
            </form>
        )
    }

}

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;