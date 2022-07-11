import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {CreateOrderState, initialState} from "./ordersSliceTypes";
import * as ordersService from "../../services/ordersService";
import OrderDTO from "../../dtos/models/OrderDTO";
import {RootState} from "../store";

export const ordersSlice = createSlice({
    name: 'orders',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers: builder =>  {
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.areOrdersLoaded = true;
        })
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.orders = [...state.orders, action.payload];
        })
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            let index = state.orders.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.orders];
            newArray[index] = action.payload;

            state.orders = [...newArray];
        })
        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            const newArray = state.orders.filter(e => e.id !== action.payload.id)
            state.orders = [...newArray];
        })
    }
});

export const fetchOrders = createAsyncThunk(
    "order/getAll",
    async () => {
        return await ordersService.getAllOrders();
    });

export const createOrder = createAsyncThunk(
    "order/create",
    async (order: CreateOrderState) => {
        return await ordersService.createOrderWithOrderedProducts(order);
    });

export const updateOrder = createAsyncThunk(
    "order/update",
    async (order: OrderDTO) => {
        return await ordersService.updateOrder(order);
    });

export const deleteOrder = createAsyncThunk(
    "order/delete",
    async (id: number) => {
        return await ordersService.deleteOrder(id);
    });

export const ordersSelector = (state: RootState) => state.orders.orders;
export const createOrderSelector = (state: RootState) => state.orders.createOrder;
export const areOrdersLoadedSelector = (state: RootState) => state.orders.areOrdersLoaded;


export const {
} = ordersSlice.actions

export default ordersSlice.reducer