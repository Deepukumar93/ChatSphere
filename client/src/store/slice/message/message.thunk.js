import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk("message/send", async ({ receiverId, message }, { rejectWithValue }) => {
    try {
        await axiosInstance.post(`/message/send-message`, { receiverId, message });

        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});

export const getMessageThunk = createAsyncThunk("message/get", async ({ receiverId, }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/message/get-messages/${receiverId}`)
        // console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        // console.error(error?.response?.data?.errMessage)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});












