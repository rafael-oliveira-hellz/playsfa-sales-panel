import axios from 'axios';

const apiUser = axios.create({
  baseURL: 'https://rafael1963.c37.integrator.host'
});

const apiUserPix = axios.create({
  baseURL: 'https://paypixapp.store'
});

const localhost = axios.create({
  baseURL: 'http://localhost:8081'
});


export { apiUser, apiUserPix, localhost };

