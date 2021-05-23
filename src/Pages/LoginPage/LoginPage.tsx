import React from 'react';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import LoginComponent from '../../Components/Global/Login/Login';
import SectionComponent from '../../Components/Global/Section/Section';
import './Styles/LoginPage.scss';

const LoginPage = (): JSX.Element => (
    <SectionComponent header="Login to TheBooker">
        <div className='login-page-wrapper column-with-padding'>
            <HeaderMeta title='Login' />
            <h1 className='header'>[ Login ]</h1>
            <LoginComponent />
        </div>
    </SectionComponent>
);

export default LoginPage;