import {Layout} from "../../components/Layout";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    currentOrderSelector,
    getCurrentForBuyerWithOrderedProducts,
    isCurrentOrderLoadedSelector
} from "../../store/orders/ordersSlice";
import {useEffect, useState} from "react";
import {CurrentOrderCard} from "../../components/CurrentOrderCard";
import {NewOrderForm} from "../../components/NewOrderForm";
import {DateTime} from "luxon";
import DeliveryStatus from "../../dtos/enums/deliveryStatus";

export function BuyerOrder() {
    const dispatch = useAppDispatch();
    const currentOrder = useAppSelector(currentOrderSelector);
    const isCurrentOrderLoaded = useAppSelector(isCurrentOrderLoadedSelector);

    const [timeRemaining, setTimeRemaining] = useState(20);

    useEffect(() => {
        if(currentOrder && currentOrder.id === 0 && !isCurrentOrderLoaded){
            dispatch(getCurrentForBuyerWithOrderedProducts());
            return;
        }

        const interval = setInterval(() => {

            setTimeRemaining(DateTime
                .fromISO(currentOrder.deliveryDateTime)
                .diff(DateTime.fromJSDate(new Date()),"seconds")
                .seconds)
            ;
        },1000);

        return () => clearInterval(interval)
    }, [currentOrder, isCurrentOrderLoaded])

    return(
        <Layout title={"New/Current Order"}>
            {
                // Present Current Order
                isCurrentOrderLoaded && currentOrder &&
                <>
                    <h1>Your current order</h1>
                    <CurrentOrderCard order={currentOrder} timeRemaining={timeRemaining} />
                </>
            }

            {
                !currentOrder || currentOrder.deliveryStatus === DeliveryStatus.Delivered &&
                <h1>Your order is delivered. Refresh the page to create a new one</h1>
            }

            {
                // Present new order form
                isCurrentOrderLoaded && !currentOrder &&
                <>
                    <h1>Create new order</h1>
                    <NewOrderForm />
                </>
            }

        </Layout>
    );
}