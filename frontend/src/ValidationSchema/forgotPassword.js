import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Email is required")
});

export default schema;