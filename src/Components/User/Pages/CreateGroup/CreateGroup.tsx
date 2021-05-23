import React from 'react';
import { useForm } from "react-hook-form";
import './Styles/CreateGroup.scss';
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './Utils/validationSchema';
import GenerateBasicInfoInputs from './Components/GenerateBasicInfoInputs';
import { myGroups } from '../../../../Routes/Utils/routes.json';
import { Link } from 'react-router-dom';
import IGroupInfoInputs from './Types/IGroupInfoInputs';
import IGroupForm from './Types/IGroupForm';
import textareaAutoResize from './Functions/textareaAutoResize';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const CreateGroup = (): JSX.Element => {
    const { register, handleSubmit, errors, reset } = useForm<IGroupForm>({
        resolver: yupResolver(validationSchema),
    });

    const partyInfoInputs: IGroupInfoInputs[] = [{
        label: "Group name:",
        name: "name",
        type: "text",
        error: errors.name,
        ref: register
    },
    {
        label: "Picture:",
        name: "photo",
        type: "file",
        error: errors.photo,
        ref: register
    }];

    const onSubmit = (formData: IGroupForm) => {
        const { name, description, photo } = formData;

        console.log({ name, description, photo: photo[0] });

        reset();
    }

    const sectionHeader = 'Create Group';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='create-group-wrapper column-with-padding'>
                <nav>
                    <Link to={`/app${myGroups.href}`}>
                        <button className='normal-button'>Go Back</button>
                    </Link>
                </nav>
                <h1 className='header'>[ Create group ]</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <GenerateBasicInfoInputs basicInfoInputs={partyInfoInputs} />
                    <div className='input-container'>
                        <label className='description'>Description:</label>
                        <textarea ref={register} name="description" onKeyDown={textareaAutoResize} rows={1}></textarea>
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>
                    <input type="submit" value="Create Group" className='go-to-the-summary-button' />
                </form>
            </div>
        </SectionComponent>
    )
};

export default CreateGroup;