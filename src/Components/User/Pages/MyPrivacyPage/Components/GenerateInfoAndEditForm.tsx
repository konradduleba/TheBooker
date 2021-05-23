import React, { useState } from 'react';
import updateUserPrivacy from '../Functions/updateUserPrivacy';
import IGenerateInfoAndEditForm from '../Types/IGenerateInfoAndEditForm';
import IUpdateUserPrivacy from '../Types/IUpdateUserPrivacy';
import GenerateOptions from './GenerateOptions';

const GenerateInfoAndEditForm = ({ infoAndEditData }: IGenerateInfoAndEditForm): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const { form, info, options } = infoAndEditData;
    const { ref, name, handleSubmit } = form;
    const { label, value, key } = info;
    const [fieldValue, setFieldValue] = useState(value);

    const onSubmit = async ({ option }: IUpdateUserPrivacy) => {
        const fieldWithValue = { [key]: option };

        const { isSuccess } = await updateUserPrivacy(fieldWithValue);

        if (isSuccess) {
            setFieldValue(option);

            return setEdit(false);
        }

    };

    if (edit)
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='edit-container'>
                    <label>{label}</label>
                    <select ref={ref} name={name} defaultValue={fieldValue}>
                        <GenerateOptions optionsEnum={options} />
                    </select>
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
                <p>{label}</p>
                <p>{fieldValue}</p>
            </aside>
            <button className='normal-button' onClick={() => setEdit(true)}>Edit</button>
        </div>
    )
}

export default GenerateInfoAndEditForm;