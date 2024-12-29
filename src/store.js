// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReduce from './avSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av : avReduce,
  },
});
