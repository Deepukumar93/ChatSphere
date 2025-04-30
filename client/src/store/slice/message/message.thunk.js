import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk("message/send", async ({ recieverId, message }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/user/login${recieverId}`, {
           message
        })
        // console.log(response)
        // toast.success("Login Successfull")
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error?.response?.data?.errMessage)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const getMessageThunk = createAsyncThunk("message/get", async ({ recieverId, }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.getS(`/message/get-messages${recieverId}`)
        return response.data

    } catch (error) {
        console.error(error?.response?.data?.errMessage)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});












