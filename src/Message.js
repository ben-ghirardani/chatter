import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <p> Name: {this.props.name} </p>
                <p> Message: {this.props.text} </p>
            </div>
        )
    }

}

export default Message;