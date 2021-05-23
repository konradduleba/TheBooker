import React from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../../../../Routes/Utils/routes.json';

const HomeButton = (): JSX.Element => (
    <Link to={`/app${home.href}`}><button className='normal-button'>Home</button></Link>
);

export default HomeButton;