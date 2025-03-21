import * as yup from "yup";

const signUpSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm password is required"),
    code: yup.string().required('Code is required')
});

export default signUpSchema