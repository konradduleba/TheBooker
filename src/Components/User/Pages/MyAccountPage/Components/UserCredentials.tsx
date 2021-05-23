import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IUserCredentails from '../Types/IUserCredentials';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import { IOnSubmit } from '../Types/IGenerateInfoAndEditForm';
import patchAccountData from '../Functions/patchAccountData';
import EEndPointList from '../Enums/EEndPointList';

const validationSchema = yup.object().shape({
    name: yup.string()
        .required("First name is required")
        .min(2, "First name have to contain minimum 2 characters")
        .max(20, "First name have to contain maximum 20 characters"),
    lastname: yup.string()
        .required("Last name is required")
        .min(2, "Last name have to contain minimum 2 characters")
        .max(20, "Last name have to contain maximum 20 characters")
});

const UserCredentials = ({ name, lastname }: IUserCredentails): JSX.Element => {
    const [newUserCredentials, setNewUserCredentials] = useState({
        newName: name,
        newLastname: lastname
    });
    const { register, handleSubmit, errors } = useForm<IUserCredentails>({ resolver: yupResolver(validationSchema) });
    const { newLastname, newName } = newUserCredentials

    const onUpdate = async (data: IOnSubmit) => {
        const { name, lastname } = data;

        const formData = {
            newName: name,
            newLastname: lastname
        };

        const { isSuccess } = await patchAccountData(data, EEndPointList.PATCH_USER_CREDENTIALS);

        if (isSuccess)
            return setNewUserCredentials(formData);

        return null;
    }

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Name',
            value: `${newName} ${newLastname}`
        },
        form: {
            handleSubmit: handleSubmit,
            fields: [{
                label: 'First Name:',
                name: 'name',
                type: 'text',
                ref: register,
                error: errors.name,
                inputValue: newName
            },
            {
                label: 'Last Name:',
                name: 'lastname',
                type: 'text',
                ref: register,
                error: errors.lastname,
                inputValue: newLastname
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} submitHandler={onUpdate} />
}

export default UserCredentials;