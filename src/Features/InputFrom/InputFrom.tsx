import React, { useState } from "react";
import styles from "./InputFrom.module.scss";
import { Employees } from "../../Shared/types/data";
import { schemas } from "../../Shared/validation/validationSchema";

interface DataItem {
  label: string;
  value: string;
}

interface ListDataItemProps {
  section: keyof Employees;
  data: Record<string, DataItem>;
  onChange: (section: keyof Employees, field: string, value: string) => void;
  onError: (key: string, error: string | null) => void;
}

const InputFrom: React.FC<ListDataItemProps> = ({
  section,
  data = {},
  onChange,
  onError,
}) => {
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const getValidationError = (key: string, value: string) => {
    const fieldValidation = schemas.custom.fields[key];
    if (fieldValidation) {
      try {
        fieldValidation.validateSync(value);
        return null;
      } catch (error: any) {
        return error.message;
      }
    }
    return null;
  };

  const handleInputChange = (
    section: keyof Employees,
    key: string,
    value: string
  ) => {
    const error = getValidationError(key, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: error || null, 
    }));

    onChange(section, key, value);
    onError(key, error); 
  };

  return (
    <>
      {Object.entries(data).map(([key, item]) => {
        const error = errors[key];

        return (
          <div key={key} className={styles["input-from"]}>
            <div className={styles["input-from__old-info"]}>
              <label className={styles["input-from__old-info__label"]}>
                {item.label}
              </label>
              {error && (
                <div className={styles["input-from__error"]}>{error}</div>
              )}
            </div>
            <input
              type="text"
              name={key}
              value={item.value || ""}
              onChange={(e) => handleInputChange(section, key, e.target.value)}
              placeholder="Введите новое значение"
              className={styles["input-from__input"]}
            />
          </div>
        );
      })}
    </>
  );
};

export default InputFrom;
