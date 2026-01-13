import { User } from "@/types/TypesAll";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
}
const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isCheckingAuth = false;
    },
    setLogOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isCheckingAuth = false;
    },
  },
});
export const { setUser, setLogOut } = authSlice.actions;
