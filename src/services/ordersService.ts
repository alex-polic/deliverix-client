import OrderDTO from "../dtos/models/OrderDTO";

import * as apiClient from "../clients/apiClient";
import {CreateOrderState} from "../store/orders/ordersSliceTypes";

export async function getAllOrders(): Promise<OrderDTO[]> {
    return await apiClient.getAllOrders();
}

export async function createOrderWithOrderedProducts(order: CreateOrderState) {
    return await apiClient.createOrderWithOrderedProducts(order);
}

export async function updateOrder(order: OrderDTO) {
    return await apiClient.updateOrder(order);
}

export async function deleteOrder(id: number) {
    return await apiClient.deleteOrder(id);
}