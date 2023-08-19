import UserDTO from "../models/UserDTO";
import OrderedProductDTO from "../models/OrderedProductDTO";

export default interface OrderWithBuyerAndSellerAndOrderedProductsDTO {
    id: number,

    buyer: UserDTO,
    seller: UserDTO,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: number,
    deliveryDateTime: string,

    orderedProducts: OrderedProductDTO[],

    createdAt: string,
    updatedAt: string
}