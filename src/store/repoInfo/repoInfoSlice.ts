import { getRepoInfo } from '@api/repo'
import { RepoInfo } from '@interfaces/repo_info'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface RepoState {
  loading: boolean
  error: boolean
  info: RepoInfo | undefined
}
const initialState: RepoState = {
  error: false,
  loading: false,
  info: undefined
}

export const loadRepoInfoFx = createAsyncThunk(
  'repoInfo/load',
  async (full_name: string) => {
    const res = await getRepoInfo(full_name)
    return res
  }
)

export const repoInfoSlice = createSlice({
  name: 'repoInfo',
  initialState,
  reducers: {
    init: (state) => {
      state = { loading: false, info: undefined, error: false }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadRepoInfoFx.pending, (state) => {
      state.loading = true
      state.error = false
      state.info = undefined
    })
    builder.addCase(loadRepoInfoFx.rejected, (state) => {
      state.error = true
    })
    builder.addCase(
      loadRepoInfoFx.fulfilled,
      (state, { payload }: PayloadAction<RepoInfo>) => {
        state.loading = false
        state.error = false
        state.info = payload
      }
    )
  }
})

export const { init } = repoInfoSlice.actions
export default repoInfoSlice.reducer
