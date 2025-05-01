import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk("message/send", async ({ recieverId, message }, { rejectWithValue }) => {
    try {
        // await axiosInstance.post(`/message/send-message`, { receiverId, message });
        await axiosInstance.post(`/user/login`, { recieverId, message });
        console.log("api data fetch", response.data)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const getMessageThunk = createAsyncThunk("message/get", async ({ recieverId, }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/message/get-messages/${recieverId}`)
        // console.log(response)
        // console.log("Fetched messages:", response.data.responseData?.messages);

        return response.data

    } catch (error) {
        console.error(error)
        // console.error(error?.response?.data?.errMessage)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});












