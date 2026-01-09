import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --- UI Slice ---
interface DashboardUIState {
    activeTab: string;
    isSideBarOpen: boolean;
}

const initialDashboardUIState: DashboardUIState = {
    activeTab: "dashboard",
    isSideBarOpen: false,
};
export const dashboardUISlice = createSlice({
    name: "dashboardUI",
    initialState: initialDashboardUIState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
        },
        setSideBarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSideBarOpen = action.payload;
        },
    },
});
export const { setActiveTab, setSideBarOpen } = dashboardUISlice.actions;
