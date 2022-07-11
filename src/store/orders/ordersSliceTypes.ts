import OrderWithBuyerAndCourierAndOrderedProductsDTO
    from "../../dtos/custom/OrderWithBuyerAndCourierAndOrderedProductsDTO";

export interface CreateOrderedProductState {
    productId: number,
    amount: number
}

export interface CreateOrderState {
    buyerId: number,
    deliveryAddress: string,
    comment: string,

    orderedProducts: CreateOrderedProductState[]
}

export interface OrdersSliceState {
    orders: OrderWithBuyerAndCourierAndOrderedProductsDTO[],
    createOrder: CreateOrderState
    areOrdersLoaded: boolean
}

export const initialState : OrdersSliceState = {
    orders: [],
    createOrder: {
        buyerId: 0,
        deliveryAddress: "",
        comment: "",

        orderedProducts: []
    },
    areOrdersLoaded: false
}