import React, {useEffect} from 'react';
import {Layout} from "../../components/Layout";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    areOrdersLoadedSelector,
    fetchPastOrdersForSeller,
    ordersSelector
} from "../../store/orders/ordersSlice";
import {currentUserSelector, fetchCurrentUser} from "../../store/auth/authSlice";
import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";
import {OrderCard} from "../../components/OrderCard";

const MyOrders = () => {
    const dispatch = useAppDispatch();
    const areOrdersLoaded = useAppSelector(areOrdersLoadedSelector);
    const orders = useAppSelector(ordersSelector);
    const userData = useAppSelector(currentUserSelector)

    useEffect(() => {
        if(userData.id === 0) {
            dispatch(fetchCurrentUser())
            return;
        }
        if (areOrdersLoaded) return;

        dispatch(fetchPastOrdersForSeller(userData.id));
    }, [userData])

    return (
        <Layout title={"My Orders"}>
            <h1>View all your completed orders in the platform!</h1>
            {orders.map((order: OrderWithBuyerAndSellerAndOrderedProductsDTO) => {
                return (
                    <OrderCard
                        key={order.id}
                        id={order.id}
                        buyerFullName={order.buyer?.fullName}
                        sellerFullName={order.seller?.fullName}
                        deliveryAddress={order.deliveryAddress}
                        comment={order.comment}
                        fullPrice={order.fullPrice}
                        status={order.deliveryStatus}
                    />
                )
            })}
        </Layout>
    );
};

export default MyOrders;