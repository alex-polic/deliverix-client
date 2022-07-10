import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {initialState} from "./usersSliceTypes";
import * as usersService from "../../services/usersService";

export const usersSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers: builder =>  {
        builder.addCase(fetchCouriers.fulfilled, (state, action) => {
            state.couriers = action.payload;
            state.areCouriersLoaded = true;
        })
        builder.addCase(approveVerification.fulfilled, (state, action) => {
            let index = state.couriers.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.couriers];
            newArray[index] = action.payload;

            state.couriers = [...newArray];
        })
        builder.addCase(rejectVerification.fulfilled, (state, action) => {
            let index = state.couriers.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.couriers];
            newArray[index] = action.payload;

            state.couriers = [...newArray];
        })
    }
});

export const fetchCouriers = createAsyncThunk(
    "user/getAllCouriers",
    async () => {
        return await usersService.getAllCouriers();
    });

export const approveVerification = createAsyncThunk(
    "user/approveVerification",
    async (courierId: number) => {
        return await usersService.approveVerification(courierId);
    });

export const rejectVerification = createAsyncThunk(
    "user/rejectVerification",
    async (courierId: number) => {
        return await usersService.rejectVerification(courierId);
    });

export const couriersSelector = (state: any) => state.users.couriers;
export const areCouriersLoadedSelector = (state: any) => state.users.areCouriersLoaded;

export const {
} = usersSlice.actions

export default usersSlice.reducer