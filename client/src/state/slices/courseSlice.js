import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    id: '',
    name: '',
    description: '',
    url: '',
    views: 0,
    favorites: 0,
    dateCreated: '',
    dateUpdated: '',
  },

  reducers: {
    newVideo: (state, action) => {},
  },
});

export const { createVideo, updateVideo } = courseSlice.actions;

export default courseSlice.reducer;
