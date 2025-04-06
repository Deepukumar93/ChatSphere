import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("userfetchById", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/user/login', {
            username,
            // password
        })
        console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
        const errorOutput = error?.response?.data?.errMessage;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);

    }
});





