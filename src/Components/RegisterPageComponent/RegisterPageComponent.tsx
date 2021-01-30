import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { terms } from '../../Utils/routes.json';
import './RegisterPageComponent.scss';

interface LoginTypes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    terms: boolean;
}

const RegisterPageComponent = (): JSX.Element => {
    const { register, handleSubmit } = useForm<LoginTypes>();

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
        ref: register({ required: true, maxLength: 40, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}/i })
    }]

    const onSubmit = (data: LoginTypes) => console.log(data);

    return (
        <section className='register-page-wrapper'>
            <p className='header'>Registration</p>
            <div>
                <p>To register for thefacebook.com, just fill in the four fields below. You will have a chance to enter additional information and submit a picture once you have registered.</p>
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
                    <p className='password-info'>* You can choose any password. It does have to be minimum 8 characters long, contain at least one uppercase, lowercase letter and one digit.</p>
                    <input type="submit" value="Register Now!" className='register-button' />
                </form>
            </div>
        </section >
    )
};

export default RegisterPageComponent;