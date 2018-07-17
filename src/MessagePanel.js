import React, { Component} from 'react';
import Message from './Message';

class MessagePanel extends Component {

    constructor(props) {
        super(props);
        this.displayMessages = this.displayMessages.bind(this);
    }

    // change everything! In App, handleSubmit should create an instance of objects, name and message. Use these to populate 
    // a <Message/> which takes in and displays these things.

    displayMessages() {
        let messageList = this.props.messageList;
        let messageDisplay = [];
        for(let i = 0; i < this.props.messageList.length; i++ ) {
            messageDisplay.push(
                <div key={i}>
                    <Message 
                        text={messageList[i]}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="message-panel" >
                {this.displayMessages()}
            </div>
        )
    }

}

export default MessagePanel;