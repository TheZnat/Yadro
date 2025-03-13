interface ICOption {
  id: string;
  value: string;
  label: string;
}

export interface IDropdownProps {
  value: string;
  handleChangeDropdown: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  options: ICOption[];
  name: string;
  label?: string;
  className?: string;
}
