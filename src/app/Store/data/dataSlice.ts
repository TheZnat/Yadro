import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICDataSlice } from "./dataSlice.props";
import { Employees } from "../../../Shared/types/data";
import { deleteEmployee, fetchEmployees, updateEmployee } from "../../entities/employee/model/thunks";

const initialState: ICDataSlice = {
  items: [],
  filteredItems: [],
  isLoading: false,
  dataStatusOptions: [],
  dataDivisionOptions: [],
  dataCityOptions: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFilteredItems: (state, action: PayloadAction<Employees[]>) => {
      state.filteredItems = action.payload;
    },

    findEmployeeById: (state, action: PayloadAction<string>) => {
      const foundEmployee = state.items.find(
        (item) => item.id === action.payload
      );
      state.filteredItems = foundEmployee ? [foundEmployee] : [];
    },
  },
  extraReducers: (builder) => {
    // Обработка состояния для fetchEmployees
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.dataStatusOptions = Array.from(
          new Set(action.payload.map((item) => item.workInfo.status.value))
        );
        state.dataDivisionOptions = Array.from(
          new Set(action.payload.map((item) => item.workInfo.division.value))
        );
        state.dataCityOptions = Array.from(
          new Set(action.payload.map((item) => item.contactInfo.city.value))
        );
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Fetch error:", action.payload);
      })

      // Обработка состояния для deleteEmployee
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.filteredItems = state.filteredItems.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Delete error:", action.payload);
      })

      // Обработка состояния для updateEmployee
      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedEmployee = action.payload;
        state.items = state.items.map((item) =>
          item.id === updatedEmployee.id ? updatedEmployee : item
        );
        state.filteredItems = state.filteredItems.map((item) =>
          item.id === updatedEmployee.id ? updatedEmployee : item
        );
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Update error:", action.payload);
      });
  },
});

export const { setFilteredItems, findEmployeeById } = dataSlice.actions;
export default dataSlice.reducer;
