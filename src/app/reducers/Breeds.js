import { createSlice } from "@reduxjs/toolkit";
import { fetchBreeds } from "./ActionCreator";

const initialState = {
  breedsItems: [],
  isLoading: false,
  error: ""
}

const breedSlice = createSlice({
  name: "breedSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBreeds.fulfilled.type]: (state, action) => {
      state.breedsItems = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchBreeds.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBreeds.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default breedSlice.reducer;
export const { updateBreeds } = breedSlice.actions;
