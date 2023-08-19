import UserDTO from "../models/UserDTO";

export default interface OrderWithBuyerAndSellerDTO {
    id: number,

    buyer: UserDTO,
    seller: UserDTO,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: number,

    createdAt: string
    updatedAt: string
}