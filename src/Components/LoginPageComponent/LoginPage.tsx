import React from 'react';
import LoginComponent from '../GlobalComponents/LoginComponent';
import './LoginPage.scss';

const LoginPage = (): JSX.Element => {
    return (
        <section className='login-page-wrapper'>
            <h1>[ Login ]</h1>
            <LoginComponent />
        </section>
    )
}

export default LoginPage;