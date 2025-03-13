import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AppDispatch } from "../store";
import { ICFilterState } from "./filterSlice.props";
import { Employees } from "../../../Shared/types/index";
import { setFilteredItems } from "../data/dataSlice";

const initialState: ICFilterState = {
  search: "",
  status: "",
  division: "",
  city: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setDivision: (state, action: PayloadAction<string>) => {
      state.division = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const applyFilters =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { filter } = getState();
    const { items } = getState().data; 

    const filteredItems = items.filter((item: Employees) => {
      const matchesSearch =
        !filter.search ||
        item.fio.toLowerCase().includes(filter.search.toLowerCase());

      const matchesStatus =
        !filter.status || item.workInfo.status.value === filter.status;

      const matchesDivision =
        !filter.division ||
        item.workInfo.division.value.toString() === filter.division;

      const matchesCity =
        !filter.city || item.contactInfo.city.value.toString() === filter.city;

      return matchesSearch && matchesStatus && matchesDivision && matchesCity;
    });

    dispatch(setFilteredItems(filteredItems));
  };

export const { setSearch, setStatus, setDivision, setCity, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
