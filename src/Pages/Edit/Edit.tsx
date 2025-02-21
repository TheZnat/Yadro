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
import { Employees } from "../../Shared/types/data";
import { schemas } from "../../Shared/validation/validationSchema";

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, filteredItems, items } = useSelector(
    (state: RootState) => state.data
  );

  const [formData, setFormData] = useState<Employees | null>(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

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

  const handleFormChange = (
    section: keyof Employees,
    field: string,
    value: string
  ) => {
    setFormData((prev) => {
      if (!prev) return prev;

      if (section === "fio") {
        return { ...prev, fio: value };
      }

      const sectionData = prev[section] as Record<string, any>;
      const fieldData = sectionData?.[field] ?? {};

      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: {
            ...fieldData,
            value,
          },
        },
      };
    });
  };

  const validateField = (key: string, value: string) => {
    const fieldValidation = schemas.custom.fields[key];
    if (fieldValidation) {
      try {
        fieldValidation.validateSync(value);
        return null; // Нет ошибки
      } catch (error: any) {
        return error.message; // Ошибка
      }
    }
    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;
    const newErrors: Record<string, string | null> = {};

    if (!formData) return;

    // Проверяем все поля на ошибки
    Object.entries(formData).forEach(([section, item]) => {
      if (item && typeof item === "object") {
        Object.entries(item).forEach(([fieldKey, fieldValue]) => {
          console.log(`Validating field ${fieldKey} with value:`, fieldValue.value);
          const error = validateField(fieldKey, fieldValue.value);
          if (error) {
            isValid = false;
            newErrors[fieldKey] = error;
          }
        });
      } else {
        const error = validateField(section, item as string);
        if (error) {
          isValid = false;
          newErrors[section] = error;
        }
      }
    });

    setErrors(newErrors);

    // Если есть ошибки, не отправляем форму
    if (!isValid) {
      console.log("Form is invalid, showing alert");
      alert("Пожалуйста, исправьте ошибки перед сохранением.");
      return;
    }

    // Отправляем обновленные данные
    if (id && formData) {
      try {
        console.log("Updating employee:", {
          employeeId: id,
          updatedData: formData,
        });

        await dispatch(updateEmployee({ employeeId: id, updatedData: formData }));
        console.log("Employee updated successfully");

        navigate(-1); // Переход после успешного обновления
      } catch (error) {
        console.error("Error updating employee:", error);
        alert("Ошибка при сохранении данных");
      }
    }
  };

  if (isLoading || !employee || !formData) {
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
        <form className={styles["edit__form"]}>
          <InputFrom
            section="fio"
            data={{ fio: { label: "ФИО", value: formData.fio || "" } }}
            onChange={handleFormChange}
            onError={(key, error) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: error,
              }));
            }}
          />
          <InputFrom
            section="contactInfo"
            data={formData.contactInfo}
            onChange={handleFormChange}
            onError={(key, error) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: error,
              }));
            }}
          />
          <InputFrom
            section="workInfo"
            data={formData.workInfo}
            onChange={handleFormChange}
            onError={(key, error) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: error,
              }));
            }}
          />
          <button
            className={styles["edit__form__btn"]}
            type="submit"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        </form>
      </main>
    </div>
  );
};

export default Edit;
