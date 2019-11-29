import axios from "axios";

const baseURL = "https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles";

export const requestApi = axios.create({
    baseURL
});
