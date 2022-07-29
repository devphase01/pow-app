import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBreeds = createAsyncThunk(
  'breeds/fetchBreeds',
  async(_, thunkAPI) => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds");
      return response.data
    } catch(e) {
      return thunkAPI.rejectWithValue("Attempt to fetch data is failed =(");
    }
  }
)