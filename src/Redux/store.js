import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './cryptoSlice';

export default configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});
