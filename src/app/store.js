import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { breedAPI } from "./service/BreedService";

const rootReducer = combineReducers({
  [breedAPI.reducerPath]: breedAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(breedAPI.middleware),
})