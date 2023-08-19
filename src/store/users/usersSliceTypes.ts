import VerificationStatus from "../../dtos/enums/verificationStatus";

export interface CouriersState {
    id: number,
    profilePictureUrl: string,
    fullName: string,
    username: string,
    email: string,
    dateOfBirth: string,
    verificationStatus: VerificationStatus
}

export interface UsersSliceState {
    couriers: CouriersState[],
    areCouriersLoaded: boolean
}

export const initialState: UsersSliceState  = {
    couriers: [],
    areCouriersLoaded: false,
}