import React from 'react';
import { Link } from 'react-router-dom';
import { editProfile } from '../../../../Utils/routes.json';
import IEditMyProfileButton from '../Types/IEditMyProfileButton';

const EditMyProfileButton = ({ header, isThatMe }: IEditMyProfileButton): JSX.Element => (
    <span className='my-profile-header-container'>
        <span>{header}</span>
        {isThatMe && <Link to={`/app${editProfile.href}`}>Edit</Link>}
    </span>
);

export default EditMyProfileButton;