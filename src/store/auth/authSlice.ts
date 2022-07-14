import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import * as apiClient from "../../clients/apiClient";
import {AuthInitialState, initialState, UpdateUserState} from "./authSliceTypes";

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        userForUpdateUsername: (state, action: PayloadAction<string>) => {
            state.updateUser.username = action.payload
        },
        userForUpdateEmail: (state, action: PayloadAction<string>) => {
            state.updateUser.email = action.payload
        },
        userForUpdatePassword: (state, action: PayloadAction<string>) => {
            state.updateUser.password = action.payload
        },
        userForUpdatePasswordConfirmation: (state, action: PayloadAction<string>) => {
            state.updateUser.passwordConfirmation = action.payload
        },
        userForUpdateFullName: (state, action: PayloadAction<string>) => {
            state.updateUser.fullName = action.payload
        },
        userForUpdateAddress: (state, action: PayloadAction<string>) => {
            state.updateUser.address = action.payload
        },
        userForUpdateDateOfBirth: (state, action: PayloadAction<string>) => {
            state.updateUser.dateOfBirth = action.payload
        },
        logout: (state) => {
            localStorage.removeItem("token");
            window.location.reload();
            state.isLoggedIn = false;
        }
    },
    extraReducers: builder =>  {
        builder.addCase(fetchUserForUpdate.fulfilled, (state, action) => {

            state.updateUser = {
                ...action.payload,
                password: "",
                passwordConfirmation: "",
            };
        });
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        builder.addCase(updateUser.fulfilled, () => {
            alert("User updated");
        })
    }
})

export const fetchUserForUpdate = createAsyncThunk(
    "user/getById",
    async (id: number) => {
        return await apiClient.getUserById(id);
    });

export const fetchCurrentUser = createAsyncThunk(
    "auth/getUserData",
    async () => {
        return await apiClient.getCurrentUserData();
    });

export const updateUser = createAsyncThunk(
    "user/update",
    async (user: UpdateUserState) => {
        return await apiClient.updateUser(user);
    });

export const userForUpdateSelector = (state: { auth: AuthInitialState }) => state.auth.updateUser;
export const currentUserSelector = (state: { auth: AuthInitialState }) => state.auth.currentUser;

export const {
    userForUpdateUsername,
    userForUpdateEmail,
    userForUpdatePassword,
    userForUpdatePasswordConfirmation,
    userForUpdateFullName,
    userForUpdateAddress,
    userForUpdateDateOfBirth,
    logout
} = authSlice.actions

export default authSlice.reducer