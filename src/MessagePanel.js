import React, { Component} from 'react';
import Message from './Message';

class MessagePanel extends Component {

    constructor(props) {
        super(props);
        this.displayMessages = this.displayMessages.bind(this);
    }

    // change everything! In App, handleSubmit should create an array of objects, name and message. Use these to populate 
    // a <Message/> which takes in and displays these things.

    displayMessages() {
        let messageList = this.props.messageList;
        console.log("messageList as props in MessagePanel", messageList)
        let messageDisplay = [];
        for(let i = 0; i < this.props.messageList.length; i++ ) {
            messageDisplay.push(
                <div key={i}>
                    <Message
                        name={messageList[i].name} 
                        text={messageList[i].text}
                    />
                </div>
            )
        }
        return messageDisplay;
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