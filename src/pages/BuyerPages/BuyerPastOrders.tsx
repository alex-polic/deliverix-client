import {Layout} from "../../components/Layout";
import {OrderCard} from "../../components/OrderCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    areOrdersLoadedSelector,
    fetchPastOrdersForBuyer,
    ordersSelector
} from "../../store/orders/ordersSlice";
import {useEffect} from "react";
import {currentUserSelector, fetchCurrentUser} from "../../store/auth/authSlice";
import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";


export function BuyerPastOrders() {

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

        dispatch(fetchPastOrdersForBuyer(userData.id));
    }, [userData])

    return(
      <Layout title={"Past Orders"}>
          <h1>View all orders in the platform!</h1>
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
}