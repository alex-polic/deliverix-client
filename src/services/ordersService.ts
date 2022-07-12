import OrderDTO from "../dtos/models/OrderDTO";

import * as apiClient from "../clients/apiClient";
import {CreateOrderState} from "../store/orders/ordersSliceTypes";
import OrderWithBuyerAndCourierAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndCourierAndOrderedProductsDTO";

export async function getCurrentForBuyerWithOrderedProducts()
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO> {
    return await apiClient.getCurrentForBuyerWithOrderedProducts();
}

export async function getAllOrders()
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO[]> {

    return await apiClient.getAllOrders();
}

export async function getAllPastOrdersForBuyer(buyerId: number)
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO[]> {

    return await apiClient.getAllPastOrdersForBuyer(buyerId);
}

export async function getAllPastOrdersForCourier(courierId: number)
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO[]> {

    return await apiClient.getAllPastOrdersForCourier(courierId);
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