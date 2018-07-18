import React, { Component } from 'react';
import { Render } from 'react-dom';
 
class EnterMessageForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="message-form" onSubmit={this.props.handleSubmit} >
                <label>Test form</label>
                {/* can set maxLength, makes it easier to create divs to be inserted into the page as size is uniform */}
                <input id="message" type="text" maxLength="20" value={this.props.message.text} onChange={this.props.handleChange} ></input>
                <input id="submit" type="submit" value="Submit" ></input>
            </form>
        )
    }

}

export default EnterMessageForm;