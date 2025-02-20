import { Employees } from "../../../Shared/types/data";

export interface ICDataSlice {
  items: Employees[];
  filteredItems: Employees[];
  isLoading: boolean;
  dataStatusOptions: string[];
  dataDivisionOptions: string[];
  dataCityOptions: string[];
}
