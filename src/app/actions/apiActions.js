import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchData2 = async () => {
    try {
      const response = await axios.get('https://api.github.com/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
