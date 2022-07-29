import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const breedAPI = createApi({
  reducerPath: "breedAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1", headers:{
    "x-api-key": "bc4fdeef-4488-4379-a10f-f0cd0db0c44f"
  }
 }),
  tagTypes: ["Breeds"],
  endpoints: (build) => ({
    fetchBreeds: build.query({
      query: () => ({
        url: `/breeds`
      }),
      providesTags: "Breeds"
    }),

    fetchMedia: build.query({
      query: ({limit, order, type, breed_id}) => ({
        url: `/images/search`,
        params: {
          limit: limit,
          mime_types: type,
          order: order,
          breed_ids: breed_id,
          api_key: process.env.REACT_APP_CATAPI_KEY,
        }
      })
    })
  })
});