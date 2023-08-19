import * as apiClient from "../clients/apiClient"

export async function getAllCouriers() {
    return await apiClient.getAllCouriers();
}

export async function approveVerification(courierId: number) {
    return await apiClient.approveVerification(courierId);
}

export async function rejectVerification(courierId: number) {
    return await apiClient.rejectVerification(courierId);
}