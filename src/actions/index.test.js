import { addHouses } from './index';

describe('addHouses', () => {
  it('should create a type of ADD_HOUSES', () => {
    const mockHouses = [{ name: 'blue house'}, {name: 'red house'}]
    const expected = {
      "houses": [
        {"name": "blue house"}, 
        {"name": "red house"}
      ], 
      "type": "ADD_HOUSES"
    }
    expect(addHouses(mockHouses)).toEqual(expected)
  })
})