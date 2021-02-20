import * as yup from "yup";
import EPhotoFormats from '../Enums/EPhotoFormats';
import { photoMaxSize } from './photoSettings';

const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Party title is required")
        .min(2, "Party name have to contain minimum 2 characters")
        .max(50, "Party name have to contain maximum 50 characters"),
    photo: yup
        .mixed()
        .required("You need to provide a file")
        .test("fileSize", "The file is too large. It should be smaller than 1MB", value => value && value[0].size <= photoMaxSize)
        .test("type", "We only support png or jpeg", value => value && (value[0].type === EPhotoFormats.PNG || value[0].type === EPhotoFormats.JPG)),
});

export default validationSchema;