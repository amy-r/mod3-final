import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({houses: []});
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App store={fakeStore}/>)
    expect(wrapper).toMatchSnapshot();
  })
})