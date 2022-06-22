import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  loading: boolean;
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    toggleLoading: (state: LoadingState) => !state,
  },
});

export const selectLoading = (state) => state.loading;

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
