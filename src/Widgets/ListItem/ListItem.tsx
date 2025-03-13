import React from "react";
import styles from "./ListItem.module.scss";
import defaultIcon from "../../Shared/assets/No-image-icon.png";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { ListItemProps } from "./ListItemProps.props";
import {Button} from "../../Shared/ui/index";

const ListItem: React.FC<ListItemProps> = ({ dataEmployee }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (dataEmployee.id) {
      navigate(`/profile/${dataEmployee.id}`);
    } else {
      console.error("ID сотрудника не найден");
    }
  };

  return (
    <div className={styles["listItem"]}>
      <div className={styles["listItem__profile"]}>
        {dataEmployee.workInfo.avatar.value.length > 0 ? (
          <img
            src={dataEmployee.workInfo.avatar.value}
            alt="avatar"
            className={styles["listItem__profile-avatar"]}
          />
        ) : (
          <img
            src={defaultIcon}
            alt="icon profile"
            className={styles["listItem__profile-icon"]}
          />
        )}
        <div className={styles["listItem__main-info"]}>
          <h3 className={styles["listItem__main-info__name"]}>
            {dataEmployee.fio}
          </h3>
          <div className={styles["listItem__main-info__work-info"]}>
            <p className={styles["listItem__main-info__work-info__division"]}>
              {dataEmployee.workInfo.division.value}
            </p>
            <p className={styles["listItem__main-info__work-info__position"]}>
              {dataEmployee.workInfo.level.value}
            </p>
          </div>
        </div>
      </div>
      <div className={styles["listItem__contact-info"]}>
        <p className={styles["listItem__contact-info__tel-number"]}>
          {dataEmployee.contactInfo.phone.value}
        </p>
        <p className={styles["listItem__contact-info__email"]}>
          {dataEmployee.contactInfo.email.value}
        </p>
      </div>

      <div className={styles["listItem__status"]}>
        <div className={styles["listItem__status__info"]}>
          <p
            className={cn(styles["listItem__status__info__text"], {
              [styles["status-active"]]:
                dataEmployee.workInfo.status.value === "работает",
              [styles["status-vacation"]]:
                dataEmployee.workInfo.status.value === "в отпуске",
              [styles["status-sick"]]:
                dataEmployee.workInfo.status.value === "на больничном",
              [styles["status-fired"]]:
                dataEmployee.workInfo.status.value === "уволен",
            })}
          >
            {dataEmployee.workInfo.status.value}
          </p>
        </div>

        <Button
          type="button"
          className={styles["listItem__status__bth"]}
          onClickHandler={handleEdit}
        >
          Редактировать
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
