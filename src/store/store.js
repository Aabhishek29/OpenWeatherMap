import { configureStore } from '@reduxjs/toolkit';
import counterData from './reduces';


// Create the Redux store
const store = configureStore({
  reducer: counterData.reducer,
});

export default store;
