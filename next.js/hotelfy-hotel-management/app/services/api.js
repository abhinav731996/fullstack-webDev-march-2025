import axios from "axios";

export const userAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USERS_MOCK_API 
})