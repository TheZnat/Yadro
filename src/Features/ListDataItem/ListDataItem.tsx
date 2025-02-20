import React from "react";
import styles from "./ListDataItem.module.scss";

interface DataItem {
  label: string;
  value: string | DataItem | DataItem[]; // Это позволяет работать с вложенными объектами или массивами
}

interface ListDataItemProps {
  dataEmployeeAllInfo: {
    [key: string]: DataItem | DataItem[]; // Каждый элемент может быть объектом или массивом
  };
}

const ListDataItem: React.FC<ListDataItemProps> = ({ dataEmployeeAllInfo }) => {
  // Рекурсивная функция для рендеринга данных
  const renderData = (data: DataItem | DataItem[]) => {
    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <div key={index} className={styles["list-data__item"]}>
          <p className={styles["list-data__item__name"]}>{item.label}</p>
          <p className={styles["list-data__item__info"]}>{item.value}</p>
        </div>
      ));
    }

    // Для обычного объекта (не массива)
    return (
      <div className={styles["list-data__item"]}>
        <p className={styles["list-data__item__name"]}>{data.label}</p>
        <p className={styles["list-data__item__info"]}>{data.value}</p>
      </div>
    );
  };

  return (
    <div className={styles["list-data"]}>
      {Object.entries(dataEmployeeAllInfo).map(([key, value]) => (
        <div key={key}>
          {renderData(value)} {/* Рендерим данные для каждого поля */}
        </div>
      ))}
    </div>
  );
};

export default ListDataItem;
