import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    imgUrl: null,
    title: null,
    genre: null,
    short_description: null,
    rating: null, 
    address: null,
    dishes: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant} = resturantSlice.actions;

export const selectResturant = (state) => state.resturant.resturant;



export default resturantSlice.reducer;
