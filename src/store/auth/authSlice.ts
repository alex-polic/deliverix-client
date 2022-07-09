import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as apiClient from "../../clients/apiClient";

// Define a type for the slice state
interface LoginState {
    email: string,
    password: string,
}

interface RegisterState {
    email: string,
    password: string,
}

interface UpdateUserState {
    email: string,
    password: string,
    passwordConfirmation: string,
    username: string,
    fullName: string,
    address: string,
    dateOfBirth: string
}

interface AuthInitialState {
    login: LoginState,
    register: RegisterState,
    updateUser: UpdateUserState,
    isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: AuthInitialState = {
    login: {
        email: "",
        password: ""
    },
    updateUser: {
        email: "",
        password: "",
        passwordConfirmation: "",
        username: "",
        fullName: "",
        address: "",
        dateOfBirth: ""
    },
    register: {
        email: "",
        password: ""
    },
    isLoggedIn: !!localStorage.getItem("token"),
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLoginEmail: (state, action: PayloadAction<string>) => {
            console.log(action);
          state.login.email = action.payload;
        },
        setLoginPassword: (state, action: PayloadAction<string>) => {
            console.log(action)
            state.login.password = action.payload;
        },
    },
    extraReducers: builder =>  {
        builder.addCase(fetchUserForUpdate.fulfilled, (state, action) => {
            console.log(action.payload);
            state.updateUser = {
                ...action.payload,
                passwordConfirmation: "",
            };
        })
    }
})

export const fetchUserForUpdate = createAsyncThunk(
    "",
    async (id: number) => {
        return await apiClient.getUserById(id);
    });

export const { setLoginEmail, setLoginPassword } = authSlice.actions

export const userForUpdate = (state: { auth: AuthInitialState }) => state.auth.updateUser;

export default authSlice.reducer