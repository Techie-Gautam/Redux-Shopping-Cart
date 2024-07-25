import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartSlice } from './slices/CartSlice'; // Import both the reducer and the cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(cartSlice.actions.loadCartFromLocalStorage());

export default store;
