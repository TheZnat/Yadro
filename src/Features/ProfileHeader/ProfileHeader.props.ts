import { Employees } from "../../Shared/types/data";

export interface ProfileHeaderProps {
  dataEmployee: Employees;
  handlerDeleteBth: (id: string) => void;
  handlerEditBth: () => void;
}
