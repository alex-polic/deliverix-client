import OrderWithBuyerAndCourierAndOrderedProductsDTO
    from "../../dtos/custom/OrderWithBuyerAndCourierAndOrderedProductsDTO";
import UserType from "../../dtos/enums/userType";

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
    createOrder: CreateOrderState,
    currentOrder: OrderWithBuyerAndCourierAndOrderedProductsDTO,
    areOrdersLoaded: boolean,
    isCurrentOrderLoaded: boolean
}

export const initialState : OrdersSliceState = {
    orders: [],
    createOrder: {
        buyerId: 0,
        deliveryAddress: "",
        comment: "",

        orderedProducts: []
    },
    currentOrder: {
        id: 0,
        buyer: {
            id: 0,
            profilePictureUrl: "",
            fullName: "",
            username: "",
            email: "",
            dateOfBirth: "",
            verificationStatus: 0,
            password: "",
            address: "",
            userType: UserType.Buyer,
            createdAt: "",
            updatedAt: ""
        },
        courier: {
            id: 0,
            profilePictureUrl: "",
            fullName: "",
            username: "",
            email: "",
            dateOfBirth: "",
            verificationStatus: 0,
            password: "",
            address: "",
            userType: UserType.Courier,
            createdAt: "",
            updatedAt: ""
        },
        deliveryAddress: "",
        comment: "",
        fullPrice: 0,
        deliveryStatus: 0,
        deliveryDateTime: "",

        createdAt: "",
        updatedAt: "",

        orderedProducts: []
    },
    areOrdersLoaded: false,
    isCurrentOrderLoaded: false,
}