import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IGenerateInfoAndEditForm from '../Types/IGenerateInfoAndEditForm';
import ISaveEditField from '../Types/ISaveEditField';

const GenerateInfoAndEditForm = ({ formData, setEditedData }: IGenerateInfoAndEditForm): JSX.Element => {
    const { label, value, key, required } = formData;
    const [formValue, setFormValue] = useState<string>(value);
    const { register, handleSubmit } = useForm();
    const [edit, setEdit] = useState<boolean>(false);

    function onSubmit(data: ISaveEditField) {
        const value = data[key];

        if (value === formValue)
            return null;

        setEdit(false);
        setFormValue(value);
        return setEditedData(data);
    }

    if (edit)
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='edit-container'>
                    <label>{label}:</label>
                    <input
                        type="text"
                        name={key}
                        ref={register({ required })}
                        defaultValue={formValue}
                    ></input>
                </div>
                <div>
                    <input type="submit" value="Save" className='save-input' />
                    <button type="button" onClick={() => setEdit(false)}>Cancel</button>
                </div>
            </form>
        );

    return (
        <div className='info-container'>
            <aside>
                <p>{label}:</p>
                <p>{formValue}</p>
            </aside>
            <button className='normal-button' onClick={() => setEdit(true)}>Edit</button>
        </div>
    )
}

export default GenerateInfoAndEditForm;