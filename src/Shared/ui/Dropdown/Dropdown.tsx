import React from "react";
import styles from "./Dropdown.module.scss";
import { IDropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<IDropdownProps> = ({
  value,
  handleChangeDropdown,
  id,
  options,
  name,
  label,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={id} className={styles.dropdownLabel}>
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={handleChangeDropdown ?? (() => {})}
        className={styles["dropdown-select"]}
      >
        <option value="" disabled>
          {name}
        </option>
        {options?.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
