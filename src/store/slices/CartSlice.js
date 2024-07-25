import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedState));
      return updatedState;
    },
    loadCartFromLocalStorage(state) {
      const localStorageCart = JSON.parse(localStorage.getItem('cart')) || [];
      return localStorageCart;
    }
  }
});

export const { addToCart, removeFromCart, loadCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
export { cartSlice }; // Add this line to export the cartSlice itself
