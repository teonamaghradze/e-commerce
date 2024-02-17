import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const productsSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    deleteProduct: (state, action) => {
      const index = state.productData.findIndex(
        (item) => item._id === action.payload
      );
      if (index !== -1) {
        state.productData.splice(index, 1);
      }
    },

    resetCart: (state) => {
      state.productData = [];
    },

    increment: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload.id
      );

      if (item) {
        item.quantity++;
      }
    },

    decrement: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload.id
      );

      if (item) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, deleteProduct, resetCart, increment, decrement } =
  productsSlice.actions;
export default productsSlice.reducer;
