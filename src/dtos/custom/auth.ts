import {DateTime} from "luxon";

export interface LoginDTO {
    email: string,
    password: string,
}

export interface RegisterDTO {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    dateOfBirth: DateTime,
    address: string,
    userType: number,

}