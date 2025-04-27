import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/login', {
            username,
            password
        })
        // console.log(response)
        // toast.success("Login Successfull")
        console.log(response)
        return response.data

    } catch (error) {
        console.error(error?.response?.data?.errMessage)
        // const errorOutput = error?.response?.data?.errMessage;
        // toast.error(errorOutput);
        // return rejectWithValue(errorOutput);

    }
});

export const registerUserThunk = createAsyncThunk("user/signup", async ({ fullName, username,email, password,gender }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/register', {
            fullName,
            username,
            email,
            password,
            gender
        })
        // console.log(fullName,
        //     username,
        //     password,
        //     gender)
        toast.success("Account created Successfully!")
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const logoutUserThunk = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/logout')
        // console.log(fullName,
        //     username,
        //     password,
        //     gender)
        toast.success("logout Successfully!")
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const getUserProfileThunk = createAsyncThunk("user/getProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/user/get-profile')
        // console.log(fullName,
        //     username,
        //     password,
        //     gender)
        // toast.success("logout Successfully!")
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        // toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});




