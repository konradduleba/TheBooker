import * as yup from "yup";
import EPhotoFormats from '../Enums/EPhotoFormats';
import { photoMaxSize } from './photoSettings';

const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Group title is required")
        .min(2, "Group name have to contain minimum 2 characters")
        .max(50, "Group name have to contain maximum 50 characters"),
    photo: yup
        .mixed()
        .required("You need to provide a file")
        .test("fileSize", "The file is too large. It should be smaller than 1MB", value => value && value[0].size <= photoMaxSize)
        .test("type", "We only support png or jpeg", value => value && (value[0].type === EPhotoFormats.PNG || value[0].type === EPhotoFormats.JPG)),
    description: yup.string()
        .required("Group description is required")
        .min(2, "Group description have to container minimum 2 characters")
        .max(100, "Group description have to contain maximum 100 characters")
});

export default validationSchema;