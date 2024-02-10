import { configureStore } from "@reduxjs/toolkit";
import Slicer from "../reducers/Slicer";

export const store = configureStore({
    reducer: {
     app:Slicer
    },
  });