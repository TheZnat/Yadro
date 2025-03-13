import * as Yup from "yup";

const regx = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?\d[\d\s()-]{9,}$/,
  fio: /^[а-яА-Яa-zA-Z]+(?:\s[а-яА-Яa-zA-Z]+)*$/,
};

const fio = Yup.string()
  .matches(regx.fio, "Кириллица или латиница от 2 до 60 символов")
  .required("Введите ФИО");

const email = Yup.string()
  .matches(regx.email, "Формат example@mail.com")
  .required("Введите email");

const phone = Yup.string()
  .matches(regx.phone, "Формат +7(999)999-99-99")
  .required("Введите телефон");

export const schemas = {
  custom: Yup.object({
    fio,
    email,
    phone,
  }),
};
