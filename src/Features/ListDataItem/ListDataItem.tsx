import React from "react";
import styles from "./ListDataItem.module.scss";
import { v4 as uuidv4 } from "uuid";
import { LabelValue } from "../../Shared/types/data";
import { ListDataItemProps } from "./ListDataItem.props";

const ListDataItem: React.FC<ListDataItemProps> = ({ dataEmployeeAllInfo }) => {
  const renderData = (data: LabelValue | LabelValue[]): React.ReactNode => {
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
    <>
      {Object.entries(dataEmployeeAllInfo).map(([_, value]) => (
        <div key={uuidv4()} className={styles["list-data"]}>
          {renderData(value)}
        </div>
      ))}
    </>
  );
};

export default ListDataItem;
