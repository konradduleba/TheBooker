import React from 'react';
import LoginComponent from '../Global/Login/Login';
import './Styles/LoginLeft.scss';

const LoginLeftComponent = (): JSX.Element => {

    return (
        <section className='login-left-component-wrapper'>
            <LoginComponent />
        </section>
    )
};

export default LoginLeftComponent;