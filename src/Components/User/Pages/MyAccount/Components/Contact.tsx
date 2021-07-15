import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import IContact from '../Types/IContact';
import { IOnSubmit } from '../Types/IGenerateInfoAndEditForm';
import patchAccountData from '../Functions/patchAccountData';
import EEndPointList from '../Enums/EEndPointList';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required("Email is required")
        .min(2, "Email have to contain minimum 2 characters")
        .max(50, "Email have to contain maximum 30 characters")
        .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,50}$/i, "Email is not valid.")
});

const Contact = ({ email }: IContact): JSX.Element => {
    const [contact, setContact] = useState(email);
    const { register, handleSubmit, errors } = useForm<IContact>({ resolver: yupResolver(validationSchema) });

    const onUpdate = async (data: IOnSubmit) => {
        const { email } = data;

        const { isSuccess } = await patchAccountData(data, EEndPointList.PATCH_USER_CREDENTIALS);

        if (isSuccess)
            return setContact(email);

        return null;
    }

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Contact',
            value: contact
        },
        form: {
            className: 'single-input',
            handleSubmit: handleSubmit,
            fields: [{
                label: 'Contact:',
                name: 'email',
                type: 'text',
                ref: register,
                error: errors.email,
                inputValue: contact
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} submitHandler={onUpdate} />
}

export default Contact;