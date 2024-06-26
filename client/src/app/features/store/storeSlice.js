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
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload._id);
      state.cartOpen = state.cart.length > 0;
    },

    clearCart: (state) => {
      state.cart = [];
      state.cartOpen = false;
    },

    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    updateCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload.currentCategory;
    },
  },
});

export const {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  toggleCart,
  clearCart,
  removeFromCart,
  updateCategories,
  updateCurrentCategory,
} = storeSlice.actions;

export const storeReducer = storeSlice.reducer;
