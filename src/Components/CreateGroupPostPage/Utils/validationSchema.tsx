import * as yup from "yup";

const validationSchema = yup.object().shape({
    title: yup.string()
        .required("Group title is required")
        .min(2, "Group name have to contain minimum 2 characters")
        .max(50, "Group name have to contain maximum 50 characters"),
    description: yup.string()
        .required("Group description is required")
        .min(2, "Group description have to container minimum 2 characters")
        .max(100, "Group description have to contain maximum 100 characters")
});

export default validationSchema;