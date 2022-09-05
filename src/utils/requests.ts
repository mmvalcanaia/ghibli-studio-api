import axios from 'axios';

const baseURL = 'https://ghibliapi.herokuapp.com';

export const makeRequest = axios.create({ baseURL });
