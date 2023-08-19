import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/Layout";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    currentOrderSelector,
    getCurrentForCourierWithOrderedProducts,
    isCurrentOrderLoadedSelector
} from "../../store/orders/ordersSlice";
import {CurrentOrderCard} from "../../components/CurrentOrderCard";
import {DateTime} from "luxon";
import DeliveryStatus from "../../dtos/enums/deliveryStatus";

const CourierCurrentOrder = () => {
    const dispatch = useAppDispatch();
    const currentOrder = useAppSelector(currentOrderSelector);
    const isCurrentOrderLoaded = useAppSelector(isCurrentOrderLoadedSelector);

    const [timeRemaining, setTimeRemaining] = useState(20);

    useEffect(() => {
        if(currentOrder && currentOrder.id === 0 && !isCurrentOrderLoaded){
            dispatch(getCurrentForCourierWithOrderedProducts());
            return;
        }

        const interval = setInterval(() => {
            if(currentOrder && currentOrder.deliveryDateTime)
                setTimeRemaining(DateTime
                    .fromISO(currentOrder.deliveryDateTime)
                    .diff(DateTime.fromJSDate(new Date()),"seconds")
                    .seconds
                );
        },1000);

        return () => clearInterval(interval)
    }, [currentOrder, isCurrentOrderLoaded])

    return (
        <Layout title={"Current Order"}>

            {currentOrder &&
                <>
                    <h1>Your current order</h1>
                    <CurrentOrderCard order={currentOrder} timeRemaining={timeRemaining}/>
                </>
            }
            {(currentOrder === null || currentOrder.deliveryStatus === DeliveryStatus.Delivered) &&
                <h1>You don't have any orders being delivered. All of your orders are delivered</h1>
            }
        </Layout>
    );
};

export default CourierCurrentOrder;