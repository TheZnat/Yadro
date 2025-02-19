import React from "react";
import styles from "./ListDataItem.module.scss";

const ListDataItem: React.FC = ({ dataEmployeeAllInfo = {} }) => {
  return (
    <div className={styles["list-data__item"]}>
      <p className={styles["list-data__item__name"]}>почта</p>
      <p className={styles["list-data__item__info"]}>
        {dataEmployeeAllInfo.contactInfo.email}
      </p>
    </div>
  );
};

export default ListDataItem;
