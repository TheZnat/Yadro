import { createAsyncThunk } from "@reduxjs/toolkit";
import { employeeApi } from "../api/employeeApi";
import { Employees } from "../../../../Shared/types/data";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await employeeApi.fetchAll();
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (employeeId: string, { rejectWithValue }) => {
    try {
      await employeeApi.delete(employeeId);
      return employeeId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (
    {
      employeeId,
      updatedData,
    }: { employeeId: string; updatedData: Partial<Employees> },
    { rejectWithValue }
  ) => {
    try {
      return await employeeApi.update(employeeId, updatedData);
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
