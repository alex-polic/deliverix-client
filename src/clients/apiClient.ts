import {LoginDTO, RegisterDTO} from "../dtos/custom/auth";
import axios from "axios";

export const login = async (payload: LoginDTO) => {
    await axiosInstance.post("/auth/login", payload);
}

export const register = async (payload: RegisterDTO) => {
    await axiosInstance.post("/auth/login", payload);
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5180',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});