import axios from "axios";

const token = localStorage.getItem("token");

export const api_atema = axios.create({
  baseURL: "https://atema-backend.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const api_ibge = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});
