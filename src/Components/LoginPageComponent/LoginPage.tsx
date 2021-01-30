import React from 'react';
import LoginComponent from '../GlobalComponents/LoginComponent';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './LoginPage.scss';

const LoginPage = (): JSX.Element => {
    return (
        <SectionComponent header="Login to Thefacebook">
            <div className='login-page-wrapper'>
                <h1>[ Login ]</h1>
                <LoginComponent />
            </div>
        </SectionComponent>
    )
}

export default LoginPage;