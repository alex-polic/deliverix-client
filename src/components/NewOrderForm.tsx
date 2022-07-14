import {Button, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {areProductsLoadedSelector, fetchProducts, productsSelector} from "../store/products/productsSlice";
import {useEffect, useState} from "react";
import {CreateOrderedProductState, CreateOrderState} from "../store/orders/ordersSliceTypes";
import {createOrder} from "../store/orders/ordersSlice";
import {ProductPicker} from "./ProductPicker";
import {currentUserSelector, fetchCurrentUser} from "../store/auth/authSlice";

export function NewOrderForm() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);
    const areProductsLoaded = useAppSelector(areProductsLoadedSelector);

    const currentUser = useAppSelector(currentUserSelector);

    const [orderedProducts, setOrderedProducts] = useState<CreateOrderedProductState[]>([{
        productId: 1,
        amount: 1
    }]);
    const [createOrderState, setCreateOrderState] = useState<CreateOrderState>({
        comment: "",
        deliveryAddress: "",
        orderedProducts: orderedProducts,
        buyerId: currentUser.id
    });


    const onProductChange = (index: number, value: number) => {
        orderedProducts[index].productId = value;
        setOrderedProducts([...orderedProducts]);
        setCreateOrderState({...createOrderState, orderedProducts: orderedProducts});
    }

    const onAmountChange = (index: number, value: number) => {
        orderedProducts[index].amount = value;
        setOrderedProducts([...orderedProducts]);
        setCreateOrderState({...createOrderState, orderedProducts: orderedProducts});
    }

    const onProductAdd = () => {
        const newOrderedProducts = [...orderedProducts, {
            productId: 1,
            amount: 1,
        }]
        setOrderedProducts(newOrderedProducts);
        setCreateOrderState({...createOrderState, orderedProducts: newOrderedProducts});
    }

    const onProductRemove = (index: number) => {
        const newOrderedProducts = orderedProducts
            .filter((e, i) => i != index);
        setOrderedProducts(newOrderedProducts);
        setCreateOrderState({...createOrderState, orderedProducts: newOrderedProducts});
    }

    const setDeliveryAddress = (value: string) => {
        setCreateOrderState({...createOrderState, deliveryAddress: value});
    }

    const setComment = (value: string) => {
        setCreateOrderState({...createOrderState, comment: value});
    }

    useEffect(() => {
        if(areProductsLoaded) return;

        dispatch(fetchProducts());
    })

    useEffect(() => {
        if(currentUser.id > 0) return;

        dispatch(fetchCurrentUser());
    })

    useEffect(() => {
        setCreateOrderState({...createOrderState, buyerId: currentUser.id})
    }, [currentUser])

    return (
        <div className={"neworder-container"}>
            <TextField
                label={"Delivery address"}
                onChange={(e) => setDeliveryAddress(e.target.value)}
            />
            <TextField
                label={"Comments"}
                onChange={(e) => setComment(e.target.value)}
                minRows={3}
                maxRows={3}
            />

            {
                orderedProducts.map((e, index) =>
                    <ProductPicker
                        key={index}
                        index={index}
                        products={products}
                        value={e.productId}
                        amount={e.amount}
                        onProductChange={onProductChange}
                        onProductAdd={onProductAdd}
                        onProductRemove={onProductRemove}
                        onAmountChange={onAmountChange}
                    />
                )
            }
            <Button variant={"contained"} onClick={() => {
                dispatch(createOrder(createOrderState));
            }} >
                Submit order
            </Button>
        </div>
    );
}