import { User } from "@/types/TypesAll";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { setUser, logout } = authSlice.actions;
