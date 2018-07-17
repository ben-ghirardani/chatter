import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EnterMessageForm from './EnterMessageForm';
import MessagePanel from './MessagePanel';

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

    // EnterMessageForm
    handleChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    // EnterMessageForm
    handleSubmit(event) {
        event.preventDefault();
        this.addMessageToList();
        console.log('Form Value: ' + this.state.message)
        this.setState({message: ""})
    }

    addMessageToList() {
        let newMessage = this.state.message
        let messageArray = this.state.messageList
        messageArray.push(newMessage)
        this.setState({messageList: messageArray})
    }

    render() {
        return(
            <div>
                <EnterMessageForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    addMessageToList={this.addMessageToList}
                    message={this.state.message}
                />
                <MessagePanel
                    messageList={this.state.messageList}
                />
            </div>
        )
    }

}

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;