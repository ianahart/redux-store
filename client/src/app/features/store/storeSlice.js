import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload.products;
    },
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cart.push(action.payload.product);
    },

    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload.products);
    },
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map((product) => {
        if (product._id === action.payload._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
    },
  },
});

export const { updateProducts } = storeSlice.actions;

export const storeReducer = storeSlice.reducer;
