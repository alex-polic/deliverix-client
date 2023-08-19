import OrderDTO from "../dtos/models/OrderDTO";

import * as apiClient from "../clients/apiClient";
import {CreateOrderState} from "../store/orders/ordersSliceTypes";
import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";

export async function getCurrentForBuyerWithOrderedProducts()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> {
    return await apiClient.getCurrentForBuyerWithOrderedProducts();
}

export async function getCurrentForSellerWithOrderedProducts()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> {
    return await apiClient.getCurrentForSellerWithOrderedProducts();
}

export async function getAllOrders()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> {

    return await apiClient.getAllOrders();
}

export async function getAllPastOrdersForBuyer(buyerId: number)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> {

    return await apiClient.getAllPastOrdersForBuyer(buyerId);
}

export async function getAllPastOrdersForSeller(sellerId: number)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> {

    return await apiClient.getAllPastOrdersForSeller(sellerId);
}

export async function getAllPendingOrders()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> {

    return await apiClient.getAllPendingOrders();
}

export async function acceptDeliveryOfOrder(orderId: number)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> {

    return await apiClient.acceptDeliveryOfOrder(orderId);
}

export async function finishDeliveryOfOrder(orderId: number)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> {

    return await apiClient.finishDeliveryOfOrder(orderId);
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