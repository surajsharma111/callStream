import * as yup from "yup";

const sendCodeSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm password is required")

});

export default sendCodeSchema;