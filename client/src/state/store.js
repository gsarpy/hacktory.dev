import { configureStore } from '@reduxjs/toolkit';

// Reducers
import userReducer from './slices/userSlice';
import courseReducer from './slices/courseSlice';

export default configureStore({
  reducer: {
    course: courseReducer,
    user: userReducer
  }
});