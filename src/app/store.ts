import { configureStore } from '@reduxjs/toolkit'
import repoInfoReducer from '../store/repoInfo/repoInfoSlice'

export const store = configureStore({
  reducer: {
    repoInfo: repoInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch