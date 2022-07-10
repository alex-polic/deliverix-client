import {LoginDTO} from "../dtos/custom/auth";
import axios from "axios";
import UserDTO from "../dtos/models/UserDTO";
import {CurrentUserState, UpdateUserState} from "../store/auth/authSliceTypes";

export const login = async (payload: LoginDTO) : Promise<string> => {
    const response = await axiosInstance.post("/auth/login", payload);

    return response.data;
}

export const register = async (payload: FormData) => {
    await axiosInstance.post("/auth/register", payload);
}

export const getUserById = async (id: number) : Promise<UserDTO> => {
    const response = await axiosInstance.get(`/user/getById?${getUrlParams({id})}`);

    return response.data;
}

export const getCurrentUserData = async () : Promise<CurrentUserState> => {
    const response = await axiosInstance.get(`/auth/getUserData`);

    return response.data;
}

export const updateUser = async (data: UpdateUserState) : Promise<UserDTO> => {
    const response = await axiosInstance.patch(`/user/update`, data);

    return response.data;
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5180',
    headers: {
        'X-Custom-Header': 'foobar',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});

const getUrlParams = (data: object) : string => {
    let result = "";
    for (let i = 0; i < Object.keys(data).length; i++) {
        result += Object.keys(data)[i] + "=" + Object.values(data)[i];
    }

    return result;
}