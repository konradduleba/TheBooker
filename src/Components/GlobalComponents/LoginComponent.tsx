import React from 'react';
import { useForm } from "react-hook-form";
import routes from '../../Utils/routes.json';
import { Link } from 'react-router-dom';

interface LoginTypes {
    email: string;
    password: string;
}

const LoginComponent = (): JSX.Element => {
    const { register, handleSubmit } = useForm<LoginTypes>();

    const onSubmit = (data: LoginTypes) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
                    ref={register({
                        required: true,
                        maxLength: 40,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
                    }
                    )}
                />
            </div>
            <div className='input-container'>
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    ref={register({
                        required: true,
                        maxLength: 40,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i
                    }
                    )}
                />
            </div>
            <div className='button-container'>
                <Link to={routes.register.href}>
                    <button>{routes.register.title}</button>
                </Link>
                <input type="submit" value="login" />
            </div>
        </form>
    )
};

export default LoginComponent;