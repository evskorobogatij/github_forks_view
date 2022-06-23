import { configureStore } from '@reduxjs/toolkit'
import repoInfoReducer from '@store/repoInfo/repoInfoSlice'
import repoForksReducers from '@store/repoForks/repoForksSlice'
import favoritesReducer from '@store/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    repoInfo: repoInfoReducer,
    repoForks: repoForksReducers,
    favorites: favoritesReducer
  }
})

store.subscribe(() => {
  localStorage.setItem('favorites',JSON.stringify(store.getState().favorites))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
