import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const house = {
      name: 'fake',
      founded: 'fake',
      seats: ['fake'],
      titles: ['fake'],
      coatOfArms: 'fake',
      ancestralWeapons: ['fake'],
      words: 'fake',
      swornMembers: ['fake']
    }
    const wrapper = shallow(<Card {...house}/>)

    expect(wrapper).toMatchSnapshot();
  })
})