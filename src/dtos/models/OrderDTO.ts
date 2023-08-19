import DeliveryStatus from "../enums/deliveryStatus";

export default interface OrderDTO {
    id: number,

    buyerId: number,
    sellerId: number,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: DeliveryStatus,

    createdAt: string
    updatedAt: string
}