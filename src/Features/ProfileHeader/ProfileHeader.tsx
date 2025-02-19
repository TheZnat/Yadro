import React from "react";
import styles from "./ProfileHeader.module.scss";

const ProfileHeader: React.FC = ({ dataEmployee = {} }) => {
  return (
    <div className={styles["profile-header"]}>
      <div className={styles["profile-header__bg"]}>
        <div className={styles["profile-header__bg__first"]}></div>
        <div className={styles["profile-header__bg__second"]}></div>
        <div className={styles["profile-header__bg__fourth"]}></div>
      </div>

      <div className={styles["profile-header__info"]}>
        <div className={styles["profile-header__info__data"]}>
          <div className={styles["profile-header__info__data__avatar"]}></div>
          <div className={styles["profile-header__info__data__text"]}>
            <p className={styles["profile-header__info__data__text__status"]}>
              {dataEmployee.status}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee.name}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee.workInfo.division}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee.workInfo.position}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee.personal.dateOfBirth}
            </p>
          </div>
        </div>

        <div className={styles["profile-header__actions"]}>
          <button className={styles["profile-header__actions__button"]}>
            Изменить данные
          </button>
          <button className={styles["profile-header__actions__button"]}>
            Удалить сотрудника
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
