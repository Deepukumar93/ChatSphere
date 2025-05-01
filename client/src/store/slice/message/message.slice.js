import { createSlice } from '@reduxjs/toolkit'
import { sendMessageThunk, getMessageThunk } from './message.thunk';


const initialState = {
  buttonLoading: false,
  screenLoading:false,
  messages:null
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // send message
    builder.addCase(sendMessageThunk.pending, (state, action) => {
      state.buttonLoading = true
    });
    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      state.buttonLoading = false
    });
    builder.addCase(sendMessageThunk.rejected, (state, action) => {
      state.buttonLoading = false
    });    
    // get message
    builder.addCase(getMessageThunk.pending, (state, action) => {
        state.buttonLoading = true
      });
      builder.addCase(getMessageThunk.fulfilled, (state, action) => {
        console.log(action.payload,"actionma")
        // state.messages = action.payload?.messages || [];
        state.messages = action.payload?.responseData?.messages;
        // state.userProfile = action.payload?.responseData.user
        state.isAuthenticated = true
        state.buttonLoading = false
      });
      builder.addCase(getMessageThunk.rejected, (state, action) => {
        state.buttonLoading = false
      });
  },
});

export const { } = messageSlice.actions
export default messageSlice.reducer