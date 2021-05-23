import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import IWallDisplay from '../Types/IWallDisplay';
import IWallDisplayForm from '../Types/IWallDisplayForm';

const validationSchema = yup.object().shape({
    option: yup.string().required("Option is required")
});

const WallDisplay = ({ id, wallDisplayOption }: IWallDisplay): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<IWallDisplayForm>({ resolver: yupResolver(validationSchema) });

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Which Posts do you want to display on Your Wall?',
            value: wallDisplayOption
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

export default WallDisplay;