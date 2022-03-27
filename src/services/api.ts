
import axios from 'axios';

export const api_atema = axios.create({
  baseURL: 'https://atema-backend.herokuapp.com',
});

export const api_ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
});