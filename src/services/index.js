import axios from 'axios';
import LoadServices from './LoadServices';

const axiosClientTms = axios.create();
const axiosClientBackend = axios.create();

axiosClientTms.defaults.baseURL = 'https://mobile-api.envasetms.com';

axiosClientTms.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

//All request will wait 3 seconds before timeout
axiosClientTms.defaults.timeout = 3000;
axiosClientTms.defaults.withCredentials = true;

export const AuthService = LoadServices(axiosClientTms);
