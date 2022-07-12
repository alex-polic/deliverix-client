import React, {useEffect} from 'react';
import {Layout} from "../../components/Layout";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    currentOrderSelector,
    getCurrentForCourierWithOrderedProducts,
    isCurrentOrderLoadedSelector
} from "../../store/orders/ordersSlice";
import {CurrentOrderCard} from "../../components/CurrentOrderCard";

const CourierCurrentOrder = () => {
    const dispatch = useAppDispatch();
    const currentOrder = useAppSelector(currentOrderSelector);
    const isCurrentOrderLoaded = useAppSelector(isCurrentOrderLoadedSelector);

    useEffect(() => {
        if(currentOrder && currentOrder.id === 0 && !isCurrentOrderLoaded){
            dispatch(getCurrentForCourierWithOrderedProducts());
        }
    }, [currentOrder, isCurrentOrderLoaded])

    return (
        <Layout title={"Current Order"}>
            <h1>Your current order</h1>
            <CurrentOrderCard order={currentOrder} />
        </Layout>
    );
};

export default CourierCurrentOrder;