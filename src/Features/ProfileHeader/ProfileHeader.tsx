import React from "react";
import styles from "./ProfileHeader.module.scss";
import { Employees } from "../../Shared/types/data";
import { ProfileHeaderProps } from "./ProfileHeader.props";
import Button from "../../Widgets/Button/Button";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  dataEmployee = {} as Employees,
  handlerDeleteBth,
  handlerEditBth,
}) => {
  return (
    <div className={styles["profile-header"]}>
      <div className={styles["profile-header__bg"]}>
        <div className={styles["profile-header__bg__first"]}></div>
        <div className={styles["profile-header__bg__second"]}></div>
        <div className={styles["profile-header__bg__fourth"]}></div>
      </div>

      <div className={styles["profile-header__info"]}>
        <div className={styles["profile-header__info__data"]}>
          {dataEmployee.workInfo.avatar.value.length > 0 ? (
            <img
              src={dataEmployee.workInfo.avatar.value}
              alt="avatar"
              className={styles["profile-header__info__data__avatar"]}
            />
          ) : (
            <div className={styles["profile-header__info__data__avatar"]}></div>
          )}

          <div className={styles["profile-header__info__data__text"]}>
            <p className={styles["profile-header__info__data__text__status"]}>
              {dataEmployee?.workInfo?.status?.value || "Неизвестно"}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee?.fio || "ФИО не указано"}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee?.workInfo?.division?.value || "Нет данных"}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee?.workInfo?.level?.value || "Нет данных"}
            </p>
            <p
              className={styles["profile-header__info__data__text__work-info"]}
            >
              {dataEmployee?.contactInfo?.city?.value || "Город не указан"}
            </p>
          </div>
        </div>

        <div className={styles["profile-header__actions"]}>
          <Button
            className={styles["profile-header__actions__button"]}
            onClickHandler={handlerEditBth}
            type="button"
          >
            Изменить данные
          </Button>
          <Button
            className={styles["profile-header__actions__button"]}
            type="button"
            onClickHandler={() => handlerDeleteBth(dataEmployee.id)}
          >
            Удалить сотрудника
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
