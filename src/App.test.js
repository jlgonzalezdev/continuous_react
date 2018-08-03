import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return 4',()=>{
  const wrapper = mount(<App />);
  const inst = wrapper.instance();
  expect(inst.sum(2,2)).toBe(4);  
});