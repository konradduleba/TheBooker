import React, { useState } from 'react';
import ELimitOptions from '../Enums/ELimitOptions';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import ITimeForm from '../Types/ITimeForm';
import IGenerateInfoAndEditForm from '../Types/IGenerateInfoAndEditForm';

const validationSchema = yup.object().shape({
    option: yup.number().required("Option is required")
});

const GenerateInfoAndEditForm = ({ setFriendsLimit, friendsLimit }: IGenerateInfoAndEditForm): JSX.Element => {
    const { register, handleSubmit } = useForm<ITimeForm>({ resolver: yupResolver(validationSchema) });
    const [edit, setEdit] = useState<boolean>(false);

    const onSubmit = ({ option }: ITimeForm) => {
        console.log(option);
        setEdit(false);
        setFriendsLimit(option);
    };

    if (edit)
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='edit-container'>
                    <label>Select how many people you want to display:</label>
                    <select name="option" ref={register} defaultValue={friendsLimit}>
                        {Object.values(ELimitOptions).map((option => option && <option key={option} value={option}>{option}</option>))}
                    </select>
                </div>
                <div>
                    <input type="submit" value="Save" className='save-button' />
                    <button type="button" onClick={() => setEdit(false)} className='normal-button'>Cancel</button>
                </div>
            </form>
        );

    return <>
        <p>Displaying <span>{friendsLimit}</span> people from your social network</p>
        <button className='normal-button' onClick={() => setEdit(true)}>Edit</button>
    </>
}

export default GenerateInfoAndEditForm;