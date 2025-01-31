import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDataAllMovies, IParams, ISingleMovie } from 'src/types'

const baseUrl = 'https://www.omdbapi.com'
const apiKey = '&apikey=385ed2d5'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllMovie: builder.query<IDataAllMovies, IParams>({
      query: ({debouncedValue, typeValue, yearValue, page}) => `?s=${debouncedValue+apiKey}&type=${typeValue}&y=${yearValue}&page=${page}`,
    }),
    getSingleMovie: builder.query<ISingleMovie, string>({
      query: (id) => `?i=${id+apiKey}`
    })
  }),
})

export const { useGetAllMovieQuery, useGetSingleMovieQuery } = movieApi