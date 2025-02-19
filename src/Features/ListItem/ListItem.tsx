import React from "react";
import styles from "./ListItem.module.scss";
import defaultIcon from "../../assets/No-image-icon.png";

const ListItem: React.FC = ({ dataEmployee = {} }) => {
  return (
    <div className={styles["listItem"]}>
      <div className={styles["listItem__profile"]}>
        <img
          src={defaultIcon}
          alt="icon profile"
          className={styles["listItem__profile-icon"]}
        />
        <div className={styles["listItem__main-info"]}>
          <h3 className={styles["listItem__main-info__name"]}>
            {dataEmployee.name}
          </h3>
          <div className={styles["listItem__main-info__work-info"]}>
            <p className={styles["listItem__main-info__work-info__division"]}>
              {dataEmployee.workInfo.division}
            </p>
            <p className={styles["listItem__main-info__work-info__position"]}>
              {dataEmployee.workInfo.position}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["listItem__contact-info"]}>
        <p className={styles["listItem__contact-info__tel-number"]}>
          {dataEmployee.contactInfo.phone}
        </p>
        <p className={styles["listItem__contact-info__email"]}>
          {dataEmployee.contactInfo.email}
        </p>
      </div>

      <div className={styles["listItem__status"]}>
        <div className={styles["listItem__status__info"]}>
          <p className={styles["listItem__status__info__text"]}>
            {dataEmployee.status}
          </p>
        </div>
        <button type="button" className={styles["listItem__status__bth"]}>
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default ListItem;
