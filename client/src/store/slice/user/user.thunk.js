import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/login', {
            username,
            password
        })
        toast.success("Login Successfull")
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const registerUserThunk = createAsyncThunk("user/signup", async ({ fullName, username, password,gender }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/register', {
            fullName,
            username,
            password,
            gender
        })
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





