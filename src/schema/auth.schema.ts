import * as Yup from "yup";
export const requiredText = (text: string) => `${text} is required `;
export const AUTH_LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string().email().required(requiredText("email")),
  password: Yup.string().required(requiredText("password")),
});
