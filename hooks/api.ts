import axios from 'axios';

const apiUser = axios.create({
  baseURL: 'https://rafael1963.c37.integrator.host'
});

const apiUserPix = axios.create({
  baseURL: 'https://paypixapp.store'
});


export { apiUser, apiUserPix };

