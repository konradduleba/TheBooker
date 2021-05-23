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

const Following = (privacyInfo: IPrivacyInfo): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISeeFuturePosts>({ resolver: yupResolver(validationSchema) });
    const { following } = privacyInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Who can see the people and pages you follow?',
            value: following,
            key: EBackendFieldNames.FOLLOWING
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

export default Following;