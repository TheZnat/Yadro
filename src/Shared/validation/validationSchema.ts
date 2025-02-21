import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Некорректный email").required("Обязательное поле"),
  phone: Yup.string()
    .matches(/^\+?\d[\d\s()-]{9,}$/, "Некорректный телефон")
    .required("Обязательное поле"),
  fio: Yup.string().required("Обязательное поле"),
});
