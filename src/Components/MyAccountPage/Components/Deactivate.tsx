import React from 'react';
import { Link } from 'react-router-dom';
import { deactivateAccount } from '../../../Utils/routes.json';

const Deactivate = (): JSX.Element => (
    <div className='info-container'>
        <aside>
            <p>Deactivate</p>
            <p>Temporarily deactivate your Account</p>
        </aside>
        <Link to={`/app${deactivateAccount.href}`}>
            <button className='normal-button'>Go</button>
        </Link>
    </div>
);

export default Deactivate;