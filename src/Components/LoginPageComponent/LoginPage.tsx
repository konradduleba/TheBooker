import React from 'react';
import HeaderMeta from '../GlobalComponents/HeaderMeta/HeaderMeta';
import LoginComponent from '../GlobalComponents/LoginComponent/LoginComponent';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
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