import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// Define a type for the slice state
interface LoginState {
    email: string,
    password: string,
}

interface RegisterState {
    email: string,
    password: string,
}

interface AuthInitialState {
    login: LoginState,
    register: RegisterState,
}

// Define the initial state using that type
const initialState: AuthInitialState = {
    login: {
        email: "",
        password: ""
    },
    register: {
        email: "",
        password: ""
    }
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
})

export const { setLoginEmail, setLoginPassword } = authSlice.actions

export default authSlice.reducer