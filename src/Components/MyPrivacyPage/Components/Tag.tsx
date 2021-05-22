import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import ISeeFuturePosts from '../Types/ISeeFuturePosts';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import IPrivacyInfo from '../../../GlobalTypes/IPersonData/IPrivacyInfo';
import EBackendFieldNames from '../Database/EBackendFieldNames';

const validationSchema = yup.object().shape({
    option: yup.string().required("Option is required")
});

const Tag = (privacyInfo: IPrivacyInfo): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISeeFuturePosts>({ resolver: yupResolver(validationSchema) });
    const { tag } = privacyInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Who can tag you?',
            value: tag,
            key: EBackendFieldNames.TAG
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

export default Tag;