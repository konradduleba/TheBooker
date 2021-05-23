import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IUsername from '../Types/IUsername';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import { IOnSubmit } from '../Types/IGenerateInfoAndEditForm';
import patchAccountData from '../Functions/patchAccountData';
import EEndPointList from '../Enums/EEndPointList';

const validationSchema = yup.object().shape({
    username: yup.string()
        .required("Username is required")
        .min(2, "Username have to contain minimum 2 characters")
        .max(20, "Username have to contain maximum 30 characters")
});

const Username = ({ username }: IUsername): JSX.Element => {
    const [newUsername, setNewUsername] = useState<string>(username);
    const { register, handleSubmit, errors } = useForm<IUsername>({ resolver: yupResolver(validationSchema) });

    const onUpdate = async (data: IOnSubmit) => {
        const { username } = data;

        const formData = {
            newUsername: username
        };

        const { isSuccess } = await patchAccountData(formData, EEndPointList.PATCH_USERNAME);

        if (isSuccess)
            return setNewUsername(username);

        return null;
    }

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Username',
            value: newUsername
        },
        form: {
            className: 'single-input',
            handleSubmit: handleSubmit,
            fields: [{
                label: 'Username:',
                name: 'username',
                type: 'text',
                ref: register,
                error: errors.username,
                inputValue: newUsername
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} submitHandler={onUpdate} />
}

export default Username;