import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import IPassword from '../Types/IPassword';
import { IOnSubmit } from '../Types/IGenerateInfoAndEditForm';
import patchAccountData from '../Functions/patchAccountData';
import EEndPointList from '../Enums/EEndPointList';
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';

const validationSchema = yup.object().shape({
    currentPassword: yup.string()
        .required("Current password is required")
        .min(8, "Current password have to contain minimum 8 characters")
        .max(40, "Current password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    newPassword: yup.string()
        .required("New password is required")
        .min(8, "New password have to contain minimum 8 characters")
        .max(40, "New password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
});

const Password = (): JSX.Element => {
    const { logoutUser } = useContext(UserData);
    const { register, handleSubmit, errors } = useForm<IPassword>({ resolver: yupResolver(validationSchema) });

    const onUpdate = async (data: IOnSubmit) => {
        const { newPassword, currentPassword } = data;

        const formData = {
            newPassword,
            currentPassword
        }

        const { isSuccess } = await patchAccountData(formData, EEndPointList.PATCH_USER_PASSWORD);

        if (isSuccess && logoutUser)
            return logoutUser();

        return null;
    }

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Password',
            value: `Change Password`
        },
        form: {
            className: 'space-bottom',
            handleSubmit: handleSubmit,
            fields: [{
                label: 'Current:',
                name: 'currentPassword',
                type: 'password',
                ref: register,
                error: errors.currentPassword,
            },
            {
                label: 'New:',
                name: 'newPassword',
                type: 'password',
                ref: register,
                error: errors.newPassword
            },
            {
                label: 'Confirm New:',
                name: 'passwordConfirmation',
                type: 'password',
                ref: register,
                error: errors.passwordConfirmation
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} submitHandler={onUpdate} />
}

export default Password;