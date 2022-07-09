import * as apiClient from "../clients/apiClient"

export const login = async (email: string, password: string) => {
    const payload = {email, password};
    await apiClient.login(payload);
}

export const register = async () => {

}