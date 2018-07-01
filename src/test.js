import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// dummy test to get started
it('Should add 2 numbers', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.instance().sumNum(1,2)).toBe(3);
});