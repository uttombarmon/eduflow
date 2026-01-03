import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --- UI Slice ---
interface UIState {
  // activeTab: string;
  isAuthModalOpen: boolean;
  authMode: "login" | "signup";
}

const initialUIState: UIState = {
  // activeTab: "dashboard",
  isAuthModalOpen: false,
  authMode: "login",
};
export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    // setActiveTab: (state, action: PayloadAction<string>) => {
    //   state.activeTab = action.payload;
    // },
    setAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
    setAuthMode: (state, action: PayloadAction<"login" | "signup">) => {
      state.authMode = action.payload;
    },
  },
});
export const { setAuthModalOpen, setAuthMode } = uiSlice.actions;
