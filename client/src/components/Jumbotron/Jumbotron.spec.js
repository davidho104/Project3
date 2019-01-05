import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from './Jumbotron';

describe('Jumbotron', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Jumbotron />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  // it('renders the value of displayValue', () => {
  //   wrapper.setProps({ displayValue: 'test' });
  //   expect(wrapper.text()).toEqual('test');;
  // });q
});