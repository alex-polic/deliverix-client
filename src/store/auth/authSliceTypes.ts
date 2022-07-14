export interface LoginState {
    email: string,
    password: string,
}

export interface RegisterState {
    email: string,
    password: string,
}

export interface UpdateUserState {
    profilePictureUrl: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    username: string,
    fullName: string,
    address: string,
    dateOfBirth: string
}

export interface CurrentUserState {
    id: number,
    email: string,
    role: string,
    verificationStatus: string
}

export interface AuthInitialState {
    login: LoginState,
    register: RegisterState,
    updateUser: UpdateUserState,
    isLoggedIn: boolean,
    currentUser: CurrentUserState
}

// Define the initial state using that type
export const initialState: AuthInitialState = {
    login: {
        email: "",
        password: ""
    },
    updateUser: {
        profilePictureUrl: "",
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
    currentUser: {
        id: 0,
        email: "",
        role: "",
        verificationStatus: ""
    }
}
