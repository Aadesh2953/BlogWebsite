import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./authSlice";
export const store = configureStore({
  reducer: authSlice
});
//here store is used to store the userData coming from backend