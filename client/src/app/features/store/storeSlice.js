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
            state.cart.push(action.payload.product)

        }
  },
});

export const { updateProducts } = storeSlice.actions;

export const storeReducer = storeSlice.reducer;
