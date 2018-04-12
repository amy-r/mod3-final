import { addHouses } from '../actions/index';
import { houses } from './house-reducer'

describe('houses', () => {
  
  it('should return the default state', () => {
    expect(houses(undefined, {})).toEqual([])
  })

  it('should return an array of houses', () => {
    const mockHouses = [{ name: 'blue house'}, {name: 'red house'}]
    expect(houses(undefined, addHouses(mockHouses))).toEqual(mockHouses)
  })
})