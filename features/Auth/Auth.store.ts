import type { User } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = AuthSlice.actions;
export const user = (state: AuthState) => state.user;
export default AuthSlice;
