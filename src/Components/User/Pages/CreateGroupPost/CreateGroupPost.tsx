import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import './Styles/CreateGroupPostPage.scss';
import ICreateGroupPost from './Types/ICreateGroupPost';
import validationSchema from './Utils/validationSchema';
import textareaAutoResize from './Functions/textareaAutoResize';
import getTimeData from './Functions/getTimeData';
import { groupProfile } from '../../../../Routes/Utils/routes.json';
import { Link, useParams } from 'react-router-dom';
import ICreateGroupParams from './Types/ICreateGroupParams';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const CreateGroupPost = (): JSX.Element => {
    const { register, handleSubmit, errors, reset } = useForm<ICreateGroupPost>({
        resolver: yupResolver(validationSchema),
    });
    const { id } = useParams<ICreateGroupParams>();

    const sectionHeader = 'Create Post';

    const onSubmit = (formData: ICreateGroupPost) => {
        const { title, description } = formData;

        const { date, time } = getTimeData();

        console.log({ title, description, date, time });

        reset();
    }


    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='create-group-page-wrapper'>
                <nav>
                    <Link to={`/app${groupProfile.href}/${id}`}>
                        <button className='normal-button'>Go Back</button>
                    </Link>
                </nav>
                <div className='content-wrapper'>
                    <h1 className='header'>[ Create Post ]</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='title-container'>
                            <label>Title:</label>
                            <input type='text' className='field-input' ref={register} name='title'></input>
                            {errors.title && <p className='error'>{errors.title.message}</p>}
                        </div>
                        <div className='description-container'>
                            <label>Description:</label>
                            <textarea ref={register} name='description' onKeyDown={textareaAutoResize} rows={1}></textarea>
                            {errors.description && <p className='error'>{errors.description.message}</p>}
                        </div>
                        <input type="submit" value="Create Post" className='create-post' />
                    </form>
                </div>
            </div>
        </SectionComponent>
    )
}

export default CreateGroupPost;