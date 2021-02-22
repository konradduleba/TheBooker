import React from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import LoginComponent from '../Global/Login/Login';
import SectionComponent from '../Global/Section/Section';
import { loginMeta } from '../../Utils/headerMeta.json';
import './Styles/LoginPage.scss';

const LoginPage = (): JSX.Element => (
    <SectionComponent header="Login to TheBooker">
        <div className='login-page-wrapper column-with-padding'>
            <HeaderMeta title={loginMeta.title} />
            <h1 className='header'>[ Login ]</h1>
            <LoginComponent />
        </div>
    </SectionComponent>
);

export default LoginPage;