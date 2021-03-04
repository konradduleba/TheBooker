import React, { useState } from 'react';
import ESelectOptions from '../Enums/ESelectOptions';
import IGenerateInfoAndEditForm from '../Types/IGenerateInfoAndEditForm';

const GenerateInfoAndEditForm = ({ infoAndEditData }: IGenerateInfoAndEditForm): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const { form, info } = infoAndEditData;
    const { ref, name, handleSubmit } = form;
    const { label, value } = info;

    const onSubmit = (data: unknown) => {
        console.log(data);
        setEdit(false);
    };

    if (edit)
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='edit-container'>
                    <label>{label}</label>
                    <select ref={ref} name={name} defaultValue={value}>
                        {Object.values(ESelectOptions).map(option => <option
                            key={option}
                            value={option}>{option}</option>)}
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
                <p>{value}</p>
            </aside>
            <button className='normal-button' onClick={() => setEdit(true)}>Edit</button>
        </div>
    )
}

export default GenerateInfoAndEditForm;