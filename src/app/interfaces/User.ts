import { Role } from "./enums/Role";

export interface User {
    id: number,
    name: string,
    email: string,
    username: string,
    password: string,
    role: Role,
    phoneNumber: string,
    description: string,
    birthDate: string,
    gender: number
}