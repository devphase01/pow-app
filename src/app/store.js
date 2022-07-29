import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { breedAPI } from "./service/BreedService";
import BreedsReducer from "./reducers/Breeds";

const rootReducer = combineReducers({
  [breedAPI.reducerPath]: breedAPI.reducer,
  breeds: BreedsReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(breedAPI.middleware),
})