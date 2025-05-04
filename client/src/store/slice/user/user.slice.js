import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk, registerUserThunk, logoutUserThunk, getUserProfileThunk, getOtherUserThunk } from './user.thunk';

const initialState = {
  isAuthenticated: false,
  otherUsers: null,
  userProfile: null,
  selectedUser: JSON.parse(localStorage.getItem("selectedUser")),
  buttonLoading: false,
  screenLoading: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      localStorage.setItem("selectedUser",JSON.stringify(action.payload))
      state.selectedUser = action.payload;
    },


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
      state.selectedUser = null;
      state.otherUsers = null;
      state.isAuthenticated = false
      state.buttonLoading = false
      localStorage.clear()
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.buttonLoading = false
    });

    // get-other-users
    builder.addCase(getOtherUserThunk.pending, (state, action) => {
      state.screenLoading = false
    });
    builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
      state.otherUsers = action.payload?.responseData
      state.screenLoading = false
      // console.log(action.payload)
    });
    builder.addCase(getOtherUserThunk.rejected, (state, action) => {
      state.screenLoading = false
    });

    //get profile  user
    builder.addCase(getUserProfileThunk.pending, (state, action) => {
      state.screenLoading = true
    });
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.screenLoading = false
      state.userProfile = action.payload?.responseData
      // console.log(action.payload)
    });
    builder.addCase(getUserProfileThunk.rejected, (state, action) => {
      state.screenLoading = false
    });
  },
});


// Action creators are generated for each case reducer function
export const { setSelectedUser } = userSlice.actions

export default userSlice.reducer