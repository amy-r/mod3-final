import { fetchApi, getMembers } from './helper';

describe('fetchApi', () => {
  it('should call fetch', () => {
    const mockHouses = [{ name: 'blue house'}, {name: 'red house'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => mockHouses
      }))
    );
    fetchApi()
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should return mock houses', () => {
    const mockHouses = [{ name: 'blue house'}, {name: 'red house'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => mockHouses
      }))
    );
    expect(fetchApi()).resolves.toEqual(mockHouses)
  })

  it('should throw an error if response is not ok', () => {
    const mockHouses = [{ name: 'blue house'}, {name: 'red house'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.reject({
        ok: false,
        json: () => mockHouses
      }))
    );
    expect(fetchApi()).rejects.toEqual(Error('error getting houses'))
  })
})

describe('getMembers', () => {
  it('should call fetch', () => {
    const mockMembers = [{ name: 'will'}, {name: 'christie'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => mockMembers
      }))
    );
    getMembers()
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should return mock houses', () => {
    const mockMembers = [{ name: 'will'}, {name: 'christie'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => mockMembers
      }))
    );
    expect(getMembers()).resolves.toEqual(mockMembers)
  })

  it('should throw an error if response is not ok', () => {
    const mockMembers = [{ name: 'will'}, {name: 'christie'}]
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.reject({
        ok: false,
        json: () => mockMembers
      }))
    );
    expect(getMembers()).rejects.toEqual(Error('error getting members'))
  })
})