import {Layout} from "../../components/Layout";
import {OrderCard} from "../../components/OrderCard";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    areOrdersLoadedSelector,
    fetchOrders,
    ordersSelector
} from "../../store/orders/ordersSlice";
import OrderDTO from "../../dtos/models/OrderDTO";

export function AllOrders(){
    const dispatch = useAppDispatch();
    const areOrdersLoaded = useAppSelector(areOrdersLoadedSelector);
    const orders = useAppSelector(ordersSelector);

    useEffect(() => {
        if(areOrdersLoaded) return;

        dispatch(fetchOrders());
    }, [dispatch, areOrdersLoaded])


    return(
        <Layout title={"Orders"}>

            <h1>View all orders in the platform!</h1>
            {orders.map((order: OrderDTO) => {
                return (
                    <OrderCard
                        key={order.id}
                        id={order.id}
                        buyerFullName={"Test Buyer"}
                        courierFullName={"Test Courier"}
                        deliveryAddress={order.deliveryAddress}
                        comment={order.comment}
                        fullPrice={order.fullPrice}
                        status={order.deliveryStatus}
                    />
                )
            })}
        </Layout>
    );
}