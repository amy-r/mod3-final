import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;

  beforeAll( () => {
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

    wrapper = shallow(<Card {...house}/>);
    
    const mockMembers = [{ name: 'will'}, {name: 'christie'}];

    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => mockMembers
      }))
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getMembers on handleClick', () => {
    wrapper.instance().handleClick();
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should set state with names on handleClick', () => {
    wrapper.instance().handleClick();
    expect(wrapper.state('names')).toEqual['will', 'christie']
  })

  it('should throw an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.reject({
        ok: false,
        json: () => mockMembers
      }))
    );
    expect(wrapper.instance().handleClick()).rejects.toEqual(Error('error getting members'))
  })
})