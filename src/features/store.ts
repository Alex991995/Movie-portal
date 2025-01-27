import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import movieSlice from './slices/movieSlice'


export const store = configureStore({
  reducer: {
    movies:movieSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch