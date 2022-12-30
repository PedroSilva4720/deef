import axios from 'axios';

export const getQuests = async (id: string) => {
  const response = await axios.get(`http://localhost:9001/quest/${id}`);

  return response.data;
};
