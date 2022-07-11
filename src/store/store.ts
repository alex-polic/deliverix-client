import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {authSlice} from "./auth/authSlice";
import {usersSlice} from "./users/usersSlice";
import {productsSlice} from "./products/productsSlice";
import {ordersSlice} from "./orders/ordersSlice";
// ...

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        products: productsSlice.reducer,
        orders: ordersSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;