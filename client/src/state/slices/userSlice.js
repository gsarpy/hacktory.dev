import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    username: '',
    email: '',
    bio: '',
    favorites: [],
    following: [],
    friends: []
  },
  
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
    }
  }
});

export default userSlice.reducer;