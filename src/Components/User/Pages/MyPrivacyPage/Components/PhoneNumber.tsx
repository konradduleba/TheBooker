import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import ISeeFuturePosts from '../Types/ISeeFuturePosts';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import EBackendFieldNames from '../Database/EBackendFieldNames';
import IPrivacyInfo from '../../../../../Utils/Types/IPrivacyInfo';

const validationSchema = yup.object().shape({
    option: yup.string().required("Option is required")
});

const PhoneNumber = (privacyInfo: IPrivacyInfo): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISeeFuturePosts>({ resolver: yupResolver(validationSchema) });
    const { phoneNumber } = privacyInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Who can see your phone number?',
            value: phoneNumber,
            key: EBackendFieldNames.PHONE_NUMBER
        },
        form: {
            handleSubmit: handleSubmit,
            error: errors.option,
            ref: register,
            name: "option",
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} />
}

export default PhoneNumber;