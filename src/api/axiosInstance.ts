import axios from "axios";

export const axiosInstance = axios.create({baseURL: 'http://localhost:3001/api'});

axiosInstance.interceptors.request.use((req)=>{

    const token = localStorage.getItem('accessToken');

    req.headers['Authorization'] = `Bearer ${token}`;
    req.headers['Content-type'] = 'application/json';
    req.headers['Accept'] = 'application/json';

    return req;
}, (error)=>{
    return Promise.reject(error);
})