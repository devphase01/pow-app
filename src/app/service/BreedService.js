import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const breedAPI = createApi({
  reducerPath: "breedAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1" }),
  tagTypes: ["Breeds"],
  endpoints: (build) => ({
    fetchBreeds: build.query({
      query: () => ({
        url: `/breeds`
      }),
      providesTags: "Breeds"
    }),

    fetchBreed: build.query({
      query: (breed_id) => ({
        url: `/breeds/:${breed_id}`
      })
    })
  })
});