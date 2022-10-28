import axios from 'axios';

const api = axios.create({
  baseURL: 'https://psadns.xyz'
});

const apiUser = axios.create({
  baseURL: 'https://rafael1963.c37.integrator.host'
});

const apiLocal = axios.create({
  baseURL: 'http://localhost:3333'
});


export { api, apiLocal, apiUser };

