import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";
import {Receipt} from "@mui/icons-material";
import DeliveryStatus from "../dtos/enums/deliveryStatus";
import {useAppDispatch} from "../store/hooks";
import {finishDeliveryOfOrder} from "../store/orders/ordersSlice";

interface CurrentOrderCardProps {
    order: OrderWithBuyerAndSellerAndOrderedProductsDTO,
    timeRemaining: number
}

export function CurrentOrderCard({ order, timeRemaining }: CurrentOrderCardProps) {
    const dispatch = useAppDispatch();

    if(timeRemaining <= 0 && order.deliveryStatus === DeliveryStatus.Accepted)
        dispatch(finishDeliveryOfOrder(order.id))

    const getTimerText = () => {
        if(order.deliveryDateTime === null)
            return "TBA";

        return timeRemaining > 0 ? timeRemaining.toFixed(0) : 0
    }

    return (
        <div className={"currentorder-container"}>
            <div className={"currentorder-meta"}>
                <div className={"currentorder-icon"}>
                    <Receipt />
                </div>
                <div className={"currentorder-timer"}>
                    <p className={"timer-text"}>{getTimerText()}</p>
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