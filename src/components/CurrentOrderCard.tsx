import OrderWithBuyerAndCourierAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndCourierAndOrderedProductsDTO";
import {Receipt} from "@mui/icons-material";
import DeliveryStatus from "../dtos/enums/deliveryStatus";

interface CurrentOrderCardProps {
    order: OrderWithBuyerAndCourierAndOrderedProductsDTO,
}

export function CurrentOrderCard({ order }: CurrentOrderCardProps) {
    return (
        <div className={"currentorder-container"}>
            <div className={"currentorder-meta"}>
                <div className={"currentorder-icon"}>
                    <Receipt />
                </div>
                <div className={"currentorder-timer"}>
                    <p className={"timer-text"}>03</p>
                    <p className={"timer-text--small"}>TIME TO DELIVERY</p>
                </div>
            </div>

            <div className={"currentorder-content"}>
                <p className={"content-line"}>
                    <strong>ID:</strong> {order.id}
                </p>
                <p className={"content-line"}>
                    <strong>Full Price:</strong> {order.fullPrice
                }</p>
                <p className={"content-line"}>
                    <strong>Comment:</strong> {order.comment}
                </p>
                <p className={"content-line"}>
                    <strong>Delivery address:</strong> {order.deliveryAddress}
                </p>
                <p className={"content-line"}>
                    <strong>Status:</strong> {DeliveryStatus[order.deliveryStatus]}
                </p>
            </div>
        </div>
    );
}