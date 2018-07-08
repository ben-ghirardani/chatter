import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// finds form by it's ID and checks it is rendered
it('should render the form', () => {
    expect(shallow(<App/>).find('#message-form').length).toEqual(1)
})

// checks I can setState in test environment
it('should update state', () => {
    const wrapper = mount(<App/>)
    wrapper.setState({message: 'hello'})
    expect(wrapper.state('message')).toEqual('hello')
})

// setState, use submit from form to update state
it('should update state from message to mesaageList onClick', () => {
    const wrapper = mount(<App/>)
    wrapper.setState({message: 'hello'})
    expect(wrapper.state('messageList').length).toEqual(0);
    wrapper.find('#message-form').simulate('submit');
    expect(wrapper.state('messageList').length).toEqual(1);
})