import { configureStore } from '@reduxjs/toolkit'
import repoInfoReducer from '@store/repoInfo/repoInfoSlice'
import repoForksReducers from '@store/repoForks/repoForksSlice'

export const store = configureStore({
  reducer: {
    repoInfo: repoInfoReducer,
    repoForks: repoForksReducers
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch