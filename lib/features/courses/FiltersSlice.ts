import { Filters } from "@/types/TypesAll";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialFilterState: Filters = {
  categorie: "all",
  level: "all",
  price: "all",
  sortBy: "Popularity",
  search: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setCategorie: (state, action: PayloadAction<string>) => {
      state.categorie = action.payload;
    },
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    // setPopularity: (state, action: PayloadAction<string>) => {
    //   state.categorie = action.payload;
    // },
    // setPriceLowToHigh: (state, action: PayloadAction<string>) => {
    //   state.categorie = action.payload;
    // },
    // setPrceHighToLow: (state, action: PayloadAction<string>) => {
    //   state.categorie = action.payload;
    // },
    // setRating: (state, action: PayloadAction<string>) => {
    //   state.categorie = action.payload;
    // },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setClearAll: (state) => {
      state.categorie = "all";
      state.level = "all";
      state.price = "all";
      state.sortBy = "Popularity";
    },
  },
});

export const {
  setCategorie,
  setLevel,
  setPrice,
  setSort,
  setSearch,
  setClearAll,
} = filterSlice.actions;
