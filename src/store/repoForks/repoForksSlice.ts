import { ReposList } from '@interfaces/repo_info'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getRepoForks } from '@api/repo'

interface RepoForkState {
  loading: boolean
  forks: ReposList
}

const initialState: RepoForkState = {
  loading: true,
  forks: []
}

export const loadRepoForksFx = createAsyncThunk(
  'repoForks/load',
  async (url: string) => {
    const res = await getRepoForks(url)
    return res
  }
)

export const repoForksSlice = createSlice({
  name: 'repoForks',
  initialState,
  reducers: {
    init: (state) => {
      state.loading = true
      state.forks = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadRepoForksFx.pending, (state) => {
      state.loading = true
      state.forks = []
    })
    builder.addCase(
      loadRepoForksFx.fulfilled,
      (state, { payload }: PayloadAction<ReposList>) => {
        state.loading = false
        state.forks = payload
      }
    )
  }
})

export const { init } = repoForksSlice.actions
export default repoForksSlice.reducer
