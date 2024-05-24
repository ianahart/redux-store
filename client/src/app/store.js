import { configureStore } from '@reduxjs/toolkit';
import {
  storeReducer,
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  toggleCart,
  clearCart,
  removeFromCart,
  updateCategories,
  updateCurrentCategory,
} from './features/store/storeSlice';

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  toggleCart,
  clearCart,
  removeFromCart,
  updateCategories,
  updateCurrentCategory,
};
