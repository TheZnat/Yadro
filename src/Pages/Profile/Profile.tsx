import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import ProfileHeader from "../../Features/ProfileHeader/ProfileHeader";
import ListDataItem from "../../Features/ListDataItem/ListDataItem";
import BackPanel from "../../Widgets/BackPanel/BackPanel";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/Store/store";
import { findEmployeeById } from "../../app/Store/data/dataSlice";
import {
  deleteEmployee,
  fetchEmployees,
} from "../../app/entities/employee/model/thunks";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Загружаем данные из Redux
  const { isLoading, filteredItems, items } = useSelector(
    (state: RootState) => state.data
  );

  // Загружаем данные, если их нет
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, items.length]);

  // Ищем сотрудника после загрузки данных
  useEffect(() => {
    if (id && items.length > 0) {
      dispatch(findEmployeeById(id));
    }
  }, [dispatch, id, items.length]);

  const handleClick = () => {
    navigate(`/`);
  };

  const handlerEditBth = () => {
    navigate(`/edit/${id}`);
  };

  const handlerDeleteBth = (id: string) => {
    dispatch(deleteEmployee(id));
    navigate(`/`);
  };

  const employee = filteredItems[0];

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!employee) {
    return <div>Сотрудник не найден</div>;
  }

  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Тестовое задание в компанию Yadro</h1>
        <ProfileHeader
          dataEmployee={employee}
          handlerEditBth={handlerEditBth}
          handlerDeleteBth={() => handlerDeleteBth(id ?? "")}
        />
      </header>
      <BackPanel onClickFunction={handleClick} />
      <main className={styles["list-data--wrapper"]}>
        <ListDataItem dataEmployeeAllInfo={employee.contactInfo} />
        <ListDataItem dataEmployeeAllInfo={employee.workInfo} />
      </main>
    </>
  );
};

export default Profile;
