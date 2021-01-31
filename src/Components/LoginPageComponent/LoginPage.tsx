import React from 'react';
import HeaderMeta from '../GlobalComponents/HeaderMeta';
import LoginComponent from '../GlobalComponents/LoginComponent';
import SectionComponent from '../GlobalComponents/SectionComponent';
import { loginMeta } from '../../Utils/headerMeta.json';
import './LoginPage.scss';

const LoginPage = (): JSX.Element => {
    return (
        <SectionComponent header="Login to TheBooker">
            <div className='login-page-wrapper'>
                <HeaderMeta title={loginMeta.title} />
                <h1>[ Login ]</h1>
                <LoginComponent />
            </div>
        </SectionComponent>
    )
}

export default LoginPage;