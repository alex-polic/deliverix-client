import VerificationStatus from "../../dtos/enums/verificationStatus";

export interface SellersState {
    id: number,
    profilePictureUrl: string,
    fullName: string,
    username: string,
    email: string,
    dateOfBirth: string,
    verificationStatus: VerificationStatus
}

export interface UsersSliceState {
    sellers: SellersState[],
    areSellersLoaded: boolean
}

export const initialState: UsersSliceState  = {
    sellers: [],
    areSellersLoaded: false,
}