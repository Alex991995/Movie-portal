import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISingleMovie } from 'src/types'

export interface MovieSlice {
  favoriteMovies: ISingleMovie[]
}

const storageMovies = localStorage.getItem('movies')

const initialState: MovieSlice = {
  favoriteMovies: storageMovies ? JSON.parse(storageMovies) : []

}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  selectors: {
    selectMovies: state => state.favoriteMovies
  },
  reducers: {
    addToFavorites: (state, {payload}: PayloadAction<ISingleMovie>) => {
      state.favoriteMovies.push(payload)
      localStorage.setItem('movies', JSON.stringify(state.favoriteMovies))
    },
    deleteFromFavorites: (state, {payload}: PayloadAction<string>) => {
      state.favoriteMovies = state.favoriteMovies.filter(item => item.imdbID !== payload)
      localStorage.setItem('movies', JSON.stringify(state.favoriteMovies))
    },
    
  },
})
export const { selectMovies } = movieSlice.selectors
export const { addToFavorites } = movieSlice.actions

export default movieSlice.reducer