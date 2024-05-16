import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth-slice',
  initialState: {
    isLoggedIn: false,
  },
});

export default authSlice.reducer;
