import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk, registerUserThunk,logoutUserThunk,getUserProfileThunk } from './user.thunk';

const initialState = {
  isAuthenticated: false,
  
  userProfile: null,
  buttonLoading: false,
  screenLoading: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

    // Login user
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.buttonLoading = true
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload?.responseData.user
      state.isAuthenticated = true
      state.buttonLoading = false
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.buttonLoading = false
    });

     // Registration user
     builder.addCase(registerUserThunk.pending, (state, action) => {
      state.buttonLoading = true
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload?.responseData.user
      state.isAuthenticated = true
      state.buttonLoading = false
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.buttonLoading = false
    });

     // Logout user
     builder.addCase(logoutUserThunk.pending, (state, action) => {
      state.buttonLoading = true
    });
    builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
      state.userProfile = null
      state.isAuthenticated = false
      state.buttonLoading = false
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.buttonLoading = false
    });

    //get profile  user
    builder.addCase(getUserProfileThunk.pending, (state, action) => {
      state.screenLoading = true
    });
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      // state.userProfile = null
      state.isAuthenticated = true
      state.screenLoading = false
      console.log(action.payload)
    });
    builder.addCase(getUserProfileThunk.rejected, (state, action) => {
      state.screenLoading = false
    });
  },
});


// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer