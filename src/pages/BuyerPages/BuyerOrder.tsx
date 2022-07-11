import {Layout} from "../../components/Layout";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    currentOrderSelector,
    getCurrentForBuyerWithOrderedProducts,
    isCurrentOrderLoadedSelector
} from "../../store/orders/ordersSlice";
import {useEffect} from "react";
import {CurrentOrderCard} from "../../components/CurrentOrderCard";
import {NewOrderForm} from "../../components/NewOrderForm";

export function BuyerOrder() {
    const dispatch = useAppDispatch();
    const currentOrder = useAppSelector(currentOrderSelector);
    const isCurrentOrderLoaded = useAppSelector(isCurrentOrderLoadedSelector);

    useEffect(() => {
        if(currentOrder && currentOrder.id === 0 && !isCurrentOrderLoaded){
            dispatch(getCurrentForBuyerWithOrderedProducts());
        }
    }, [currentOrder, isCurrentOrderLoaded])

    return(
        <Layout title={"New/Current Order"}>
            {
                // Present Current Order
                isCurrentOrderLoaded && currentOrder &&
                <>
                    <h1>Your current order</h1>
                    <CurrentOrderCard order={currentOrder} />
                </>
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