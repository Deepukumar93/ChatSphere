import { createSlice } from '@reduxjs/toolkit'





// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//       isAuthenticated: false,
//     },
//     reducers: {
//       // Reducers will be added here
//     },
//   });
  

// Action creators are generated for each case reducer function
export const { Login } = userSlice.actions

export default userSlice    .reducer