import { Middleware } from "@reduxjs/toolkit";
import {
  applyFilters,
  setSearch,
  setStatus,
  setDivision,
  setCity,
  resetFilters,
} from "./filterSlice";

const filterMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const result = next(action);

    if (
      [setSearch, setStatus, setDivision, setCity, resetFilters].some((a) =>
        a.match(action)
      )
    ) {
      dispatch(applyFilters()); 
    }

    return result;
  };

export default filterMiddleware;
