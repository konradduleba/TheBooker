import React from 'react';
import LoginComponent from '../GlobalComponents/LoginComponent';
import './LoginLeftComponent.scss';

const LoginLeftComponent = (): JSX.Element => {

    return (
        <section className='login-left-component-wrapper'>
            <LoginComponent />
        </section>
    )
};

export default LoginLeftComponent;