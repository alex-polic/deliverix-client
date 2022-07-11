import UserDTO from "../models/UserDTO";
import OrderedProductDTO from "../models/OrderedProductDTO";

export default interface OrderWithBuyerAndCourierAndOrderedProductsDTO {
    id: number,

    buyer: UserDTO,
    courier: UserDTO,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: number,

    orderedProducts: OrderedProductDTO[],

    createdAt: string,
    updatedAt: string
}