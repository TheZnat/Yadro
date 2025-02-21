import React from "react";
import styles from "./InputFrom.module.scss";

interface DataItem {
  label: string;
  value: string;
}

interface ListDataItemProps {
  section: string;
  data: Record<string, DataItem>;
  onChange: (section: string, field: string, value: string) => void;
}

const InputFrom: React.FC<ListDataItemProps> = ({
  section,
  data = {},
  onChange,
}) => {
  return (
    <>
      {Object.entries(data).map(([key, item]) => (
        <div key={key} className={styles["input-from"]}>
          <div className={styles["input-from__old-info"]}>
            <label className={styles["input-from__old-info__label"]}>
              {item.label}
            </label>
          </div>
          <input
            type="text"
            name={key}
            value={item.value || ""} // Отображаем значение из объекта
            onChange={(e) => onChange(section, key, e.target.value)}
            placeholder="Введите новое значение"
            className={styles["input-from__input"]}
          />
        </div>
      ))}
    </>
  );
};

export default InputFrom;
