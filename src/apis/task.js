import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from './../constants';

// API_ENDPOINT = http://localhost:3000
const url = 'tasks';

// http://localhost:3000/tasks METHOD: GET
export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

// http://localhost:3000/tasks METHOD: POST
export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
