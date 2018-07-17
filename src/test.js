import React from 'react';
import App from './App';
import EnterMessageForm from './EnterMessageForm';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// finds form by it's ID and checks it is rendered
it('should render the form', () => {
    expect(shallow(<EnterMessageForm/>).find('#message-form').length).toEqual(1)
})

// checks I can setState in test environment
it('should update state', () => {
    const wrapper = mount(<App/>)
    wrapper.setState({message: 'hello'})
    expect(wrapper.state('message')).toEqual('hello')
})

describe('addMessageToList method', () => {
    it('should push this.state.message to this.state.messageList', () => {
        const wrapper = shallow(<App/>)
        wrapper.setState({message: "testing"})
        expect(wrapper.state('messageList').length).toEqual(0);
        wrapper.addMessageToList();
        expect(wrapper.state('messageList').length).toEqual(1);
    })
})

// setState, use submit form to update state
// it('should update state from message to mesaageList onClick', () => {
//     const wrapper = mount(<App/>)
//     wrapper.setState({message: 'hello'})
//     expect(wrapper.state('messageList').length).toEqual(0);
//     wrapper.find('#message-form').simulate('submit');
//     expect(wrapper.state('messageList').length).toEqual(1);
// })


// use setProps

// it('should something form data', () => {
//     const wrapper = shallow(<EnterMessageForm/>);
//     wrapper.setProps({ message: "hello" })
// })

// use expect(handleChange.toBeCalled)