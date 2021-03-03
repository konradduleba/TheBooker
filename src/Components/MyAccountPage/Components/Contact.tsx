import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import defaultUser from '../../../Utils/defaultUserData.json';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import IContact from '../Types/IContact';

const validationSchema = yup.object().shape({
    contact: yup.string()
        .required("Username is required")
        .min(2, "Username have to contain minimum 2 characters")
        .max(50, "Username have to contain maximum 30 characters")
        .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,50}$/i, "Email is not valid.")
});

const Contact = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<IContact>({ resolver: yupResolver(validationSchema) });
    const { userData } = useContext(UserData);
    const { contactInfo } = userData?.userData ? userData.userData : defaultUser;
    const { email } = contactInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Contact',
            value: email
        },
        form: {
            className: 'single-input',
            handleSubmit: handleSubmit,
            fields: [{
                label: 'Contact:',
                name: 'contact',
                type: 'text',
                ref: register,
                error: errors.contact
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} />
}

export default Contact;