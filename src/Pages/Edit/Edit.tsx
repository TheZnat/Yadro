import React, { useEffect, useState } from "react";
import BackPanel from "../../Widgets/BackPanel/BackPanel";
import styles from "./Edit.module.scss";
import InputFrom from "../../Features/InputFrom/InputFrom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/Store/store";
import {
  fetchEmployees,
  updateEmployee,
} from "../../app/entities/employee/model/thunks";
import { findEmployeeById } from "../../app/Store/data/dataSlice";

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, filteredItems, items } = useSelector(
    (state: RootState) => state.data
  );

  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, items.length]);

  useEffect(() => {
    if (id && items.length > 0) {
      dispatch(findEmployeeById(id));
    }
  }, [dispatch, id, items.length]);

  const employee = filteredItems[0];

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFormChange = (section: string, field: string, value: string) => {
    setFormData((prev) => {
      if (section === "fio") {
        return { ...prev, fio: value }; // Обновляем fio как строку
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            value,
          },
        },
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!id) return;

    await dispatch(updateEmployee({ employeeId: id, updatedData: formData }));
    navigate(-1);
  };

  if (isLoading || !employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["wrapper"]}>
      <header className={styles["header"]}>
        <h2>Тестовое задание в компанию Yadro</h2>
      </header>
      <div>
        <BackPanel onClickFunction={handleGoBack} />
      </div>

      <main className={styles["edit"]}>
        <form className={styles["edit__form"]} onSubmit={handleSubmit}>
          <InputFrom
            section="fio"
            data={{ fio: { label: "ФИО", value: formData.fio || "" } }} // Передаем объект с полем value для fio
            onChange={handleFormChange}
          />
          <InputFrom
            section="contactInfo"
            data={formData.contactInfo} // Тут остаются объекты как есть
            onChange={handleFormChange}
          />
          <InputFrom
            section="workInfo"
            data={formData.workInfo} // Тут тоже объект
            onChange={handleFormChange}
          />
          <button className={styles["edit__form__btn"]} type="submit">
            Сохранить
          </button>
        </form>
      </main>
    </div>
  );
};

export default Edit;
