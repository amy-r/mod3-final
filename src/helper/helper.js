export const fetchApi = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const houses = await response.json();
    return houses
  } catch (error) {
    throw new Error('error getting houses')
  }
}

export const getMembers = async (url) => {
  try {
    const response = await fetch(url);
    const members = await response.json();
    return members
  } catch (error) {
    throw new Error('error getting members')
  }
}