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

  },
});

export const { updateProducts } = storeSlice.actions;

export const storeReducer = storeSlice.reducer;
