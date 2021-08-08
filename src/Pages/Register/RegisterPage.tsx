import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../Components/Global/Section/Section';
import './Styles/RegisterPage.scss';
import IRegister from './Types/IRegister';
import { terms } from '../../Routes/Utils/routes.json';

const RegisterPageComponent = (): JSX.Element => {
    const { register, handleSubmit } = useForm<IRegister>();

    const registerForm = [{
        label: "First name:",
        name: "firstName",
        type: "text",
        ref: register({ required: true, maxLength: 20, minLength: 2, pattern: /^[A-Za-z]{2,20}/i })
    },
    {
        label: "Last name:",
        name: "lastName",
        type: "text",
        ref: register({ required: true, maxLength: 20, minLength: 2, pattern: /^[A-Za-z]{2,20}/i })
    },
    {
        label: "Email:",
        name: "email",
        type: "email",
        ref: register({ required: true, maxLength: 50, minLength: 2, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,50}$/i })
    },
    {
        label: "Password*:",
        name: "password",
        type: "password",
        ref: register({ required: true, maxLength: 40, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i })
    }]

    const onSubmit = (data: IRegister) => console.log(data);

    return (
        <SectionComponent header="Registration">
            <div className='register-page-wrapper column-with-padding'>
                <HeaderMeta title='Register' />
                <p>To register for TheBooker.com, just fill in the four fields below. You will have a chance to enter additional information and submit a picture once you have registered.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {registerForm.map(({ label, name, type, ref }) =>
                        <div className='input-container' key={label}>
                            <label>{label}</label>
                            <input
                                name={name}
                                type={type}
                                ref={ref}
                                className='field-input'
                            />
                        </div>)}
                    <div className='terms-checkbox'>
                        <input
                            name="terms"
                            type="checkbox"
                            ref={register({ required: true })}
                        />
                        <p>I have read and understood the <Link to={terms.href}>Terms of Use</Link>, and I agree to them.</p>
                    </div>
                    <p className='password-info'>* You can choose any password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.</p>
                    <input type="submit" value="Register Now!" className='register-button' />
                </form>
            </div>
        </SectionComponent>
    )
};

export default RegisterPageComponent;