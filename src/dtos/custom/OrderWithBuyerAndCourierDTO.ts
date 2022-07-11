import UserDTO from "../models/UserDTO";

export default interface OrderWithBuyerAndCourierDTO {
    id: number,

    buyer: UserDTO,
    courier: UserDTO,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: number,

    createdAt: string
    updatedAt: string
}