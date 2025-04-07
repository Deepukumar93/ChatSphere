import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk';

const initialState = {
  isAuthenticated: false,
  screenLoading: false,
  userProfile: null,
  buttonLoading:false,
  screenLoading:false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder.addCase(loginUserThunk.pending, (state, action) => {
          state.buttonLoading = true
      });
      builder.addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.userProfile = action.payload?.responseData.user
        state.buttonLoading = false
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.buttonLoading = false
  });
  },
  });
  

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer