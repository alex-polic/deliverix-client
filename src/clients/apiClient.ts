import {LoginDTO} from "../dtos/custom/auth";
import axios from "axios";

export const login = async (payload: LoginDTO) : Promise<string> => {
    const response = await axiosInstance.post("/auth/login", payload);

    return response.data;
}

export const register = async (payload: FormData) => {
    await axiosInstance.post("/auth/register", payload);
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5180',
    headers: {'X-Custom-Header': 'foobar'}
});