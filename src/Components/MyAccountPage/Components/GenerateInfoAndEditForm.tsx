import React, { useState } from 'react';
import IGenerateInfoAndEditForm from '../Types/IGenerateInfoAndEditForm';

const GenerateInfoAndEditForm = ({ infoAndEditData }: IGenerateInfoAndEditForm): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const { form, info } = infoAndEditData;
    const { className, fields, handleSubmit } = form;
    const { label, value } = info;

    const onSubmit = (data: unknown) => {
        console.log(data);
        setEdit(false);
    };

    if (edit)
        return (
            <form onSubmit={handleSubmit(onSubmit)} className={className}>
                <div className='edit-container'>
                    {fields.map(({ label, name, type, ref, error }) => <div key={label}>
                        <label>{label}</label>
                        <input name={name} type={type} ref={ref} className='field-input'></input>
                        {error && <p className='error'>{error.message}</p>}
                    </div>)}
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