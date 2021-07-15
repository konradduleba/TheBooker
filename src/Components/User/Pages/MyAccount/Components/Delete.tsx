import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../../../../Routes/Utils/routes.json';

const Delete = (): JSX.Element => (
    <div className='info-container'>
        <aside>
            <p>Delete</p>
            <p>Permanently delete your Account</p>
        </aside>
        <Link to={`/app${deleteAccount.href}`}>
            <button className='normal-button'>Go</button>
        </Link>
    </div>
);

export default Delete;