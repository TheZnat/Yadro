import { Employees, LabelValue } from "../../Shared/types/data";



export interface ListDataItemProps {
  section: keyof Employees;
  data: Record<string, LabelValue>;
  onChange: (section: keyof Employees, field: string, value: string) => void;
  onError: (key: string, error: string | null) => void;
}
