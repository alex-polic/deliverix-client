import {Layout} from "../../components/Layout";
import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";
import {OrderCard} from "../../components/OrderCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    acceptDeliveryOfOrder,
    areOrdersLoadedSelector,
    fetchPendingOrders,
    ordersSelector
} from "../../store/orders/ordersSlice";
import {useEffect} from "react";
import {DeliveryDining} from "@mui/icons-material";
import {Button} from "@mui/material";

export function NewOrders() {

    const dispatch = useAppDispatch();
    const areOrdersLoaded = useAppSelector(areOrdersLoadedSelector);
    const orders = useAppSelector(ordersSelector);

    useEffect(() => {
        if (areOrdersLoaded) return;

        dispatch(fetchPendingOrders());
    }, [areOrdersLoaded])

    const acceptDelivery = (id: number) => {
        dispatch(acceptDeliveryOfOrder(id));
    }

    return (
      <Layout title={"New Orders"}>
          <h1>View all orders awaiting delivery!</h1>
          <div className={"neworders-container"}>
          {

              orders.map((order: OrderWithBuyerAndSellerAndOrderedProductsDTO) => {
              return (
                  <div key={order.id} className={"deliver-order"}>
                      <OrderCard
                          id={order.id}
                          buyerFullName={order.buyer?.fullName}
                          sellerFullName={order.seller?.fullName}
                          deliveryAddress={order.deliveryAddress}
                          comment={order.comment}
                          fullPrice={order.fullPrice}
                          status={order.deliveryStatus}
                      />
                      <Button
                          sx={{margin:"0 5px"}}
                          variant={"contained"}
                          onClick={() => acceptDelivery(order.id)}
                      >
                          <DeliveryDining />
                      </Button>
                      <span>Deliver this order</span>
                  </div>

              )
          })}
        </div>
      </Layout>
    );
}