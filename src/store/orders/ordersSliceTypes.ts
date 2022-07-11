import OrderDTO from "../../dtos/models/OrderDTO";

export interface CreateOrderedProductState {
    productId: number,
    amount: number
}

export interface CreateOrderState {
    buyerId: number,
    courierId: number,
    deliveryAddress: string,
    comment: string,

    orderedProducts: CreateOrderedProductState[]
}

export interface OrdersSliceState {
    orders: OrderDTO[],
    createOrder: CreateOrderState
    areOrdersLoaded: boolean
}

export const initialState : OrdersSliceState = {
    orders: [],
    createOrder: {
        buyerId: 0,
        courierId: 0,
        deliveryAddress: "",
        comment: "",

        orderedProducts: []
    },
    areOrdersLoaded: false
}