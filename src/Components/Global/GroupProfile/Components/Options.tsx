import React from 'react';
import { Link } from 'react-router-dom';
import { createGroupPost, leaveGroup, groupPreferences } from '../../../../Utils/routes.json';
import IOptions from '../Types/IOptions';

const Options = ({ id }: IOptions): JSX.Element => (
    <div className='group-options'>
        <Link to={`/app${createGroupPost.href}/${id}`}>{createGroupPost.title}</Link>
        <Link to={`/app${groupPreferences.href}/${id}`}>{groupPreferences.title}</Link>
        <Link to={`/app${leaveGroup.href}/${id}`}>{leaveGroup.title}</Link>
    </div>
);

export default Options;