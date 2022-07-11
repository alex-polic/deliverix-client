export default interface OrderDTO {
    id: number,

    buyerId: number,
    courierId: number,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    deliveryStatus: number,

    createdAt: string
    updatedAt: string
}