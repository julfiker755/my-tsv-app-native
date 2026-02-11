import * as Yup from "yup";

const email = Yup.string()
  .email("Invalid email address")
  .required("Email is required");

export const Login_sc = Yup.object().shape({
  email: email,
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
