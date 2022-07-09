import UserType from "../enums/userType";
import VerificationStatus from "../enums/verificationStatus";

export default interface UserDTO {
    id: number,

    username: string,
    email: string,
    password: string,
    fullName: string,
    dateOfBirth: string
    address: string,
    userType: UserType
    profilePictureUrl: string,
    verificationStatus: VerificationStatus

    createdAt: string
    updatedAt: string
}