import * as apiClient from "../clients/apiClient"

export async function getAllSellers() {
    return await apiClient.getAllSellers();
}

export async function approveVerification(sellerId: number) {
    return await apiClient.approveVerification(sellerId);
}

export async function rejectVerification(sellerId: number) {
    return await apiClient.rejectVerification(sellerId);
}