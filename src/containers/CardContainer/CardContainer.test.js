import configureMockStore from 'redux-mock-store'
const fakeStore = configureMockStore()({houses: []});
import React from 'react';
import { Provider } from 'react-redux';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer store={fakeStore}/>)
    expect(wrapper).toMatchSnapshot();
  })
})
