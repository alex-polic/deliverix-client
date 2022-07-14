import * as apiClient from "../clients/apiClient"

export const login = async (email: string, password: string) => {
    const payload = {email, password};
    const token = await apiClient.login(payload);

    localStorage.setItem("token", token);
    return token;
}

export const register = async (formData: FormData) => {
    return await apiClient.register(formData);
}

export const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
}