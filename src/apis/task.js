import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from './../constants';

// API_ENDPOINT = http://localhost:3000
const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
