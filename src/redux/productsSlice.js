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
        (item) => item.id === action.payload
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
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity++;
      }
    },

    decrement: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteProduct,
  resetCart,
  increment,
  decrement,
  addUser,
  removeUser,
} = productsSlice.actions;
export default productsSlice.reducer;
