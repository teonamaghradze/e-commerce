import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import { storage } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig);

export const store = configureStore({
  reducer: {
    ecommerce: productsReducer,
  },
});
