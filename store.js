import { configureStore } from "@reduxjs/toolkit";
import basketReducer  from "./featureSlice/basketSlice";
import resturantReducer from "./featureSlice/resturantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    resturant: resturantReducer
  },
});
