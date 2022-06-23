import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const loadState = () => {
  try {
    const serialState = localStorage.getItem('favorites')
    if (serialState === null) {
      return undefined
    }
    return JSON.parse(serialState) as Array<number>
  } catch (err) {
    return undefined
  }
}

const initial: Array<number> = loadState() || []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initial,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<number>) => {
      if (!state.includes(payload)) state.push(payload)
    },
    removeFromFavorite: (state, { payload }: PayloadAction<number>) => {  
      return state.filter((item) => item !== payload)
    }
  }
})

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
