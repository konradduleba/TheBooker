import React from 'react';
import { Link } from 'react-router-dom';
import { createGroupPost, leaveGroup, groupPreferences } from '../../../../Routes/Utils/routes.json';
import IOptions from '../Types/IOptions';

const Options = ({ id, name }: IOptions): JSX.Element => (
    <div className='group-options'>
        <Link to={`/app${createGroupPost.href}/${id}`}>{createGroupPost.title}</Link>
        <Link to={`/app${groupPreferences.href}/${id}`}>{groupPreferences.title}</Link>
        <Link to={`/app${leaveGroup.href}/${id}/${name}`}>{leaveGroup.title}</Link>
    </div>
);

export default Options;