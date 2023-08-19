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
        builder.addCase(fetchSellers.fulfilled, (state, action) => {
            state.sellers = action.payload;
            state.areSellersLoaded = true;
        })
        builder.addCase(approveVerification.fulfilled, (state, action) => {
            let index = state.sellers.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.sellers];
            newArray[index] = action.payload;

            state.sellers = [...newArray];
        })
        builder.addCase(rejectVerification.fulfilled, (state, action) => {
            let index = state.sellers.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.sellers];
            newArray[index] = action.payload;

            state.sellers = [...newArray];
        })
    }
});

export const fetchSellers = createAsyncThunk(
    "user/getAllSellers",
    async () => {
        return await usersService.getAllSellers();
    });

export const approveVerification = createAsyncThunk(
    "user/approveVerification",
    async (sellerId: number) => {
        return await usersService.approveVerification(sellerId);
    });

export const rejectVerification = createAsyncThunk(
    "user/rejectVerification",
    async (sellerId: number) => {
        return await usersService.rejectVerification(sellerId);
    });

export const sellersSelector = (state: any) => state.users.sellers;
export const areSellersLoadedSelector = (state: any) => state.users.areSellersLoaded;

export const {
} = usersSlice.actions

export default usersSlice.reducer