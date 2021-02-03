import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import routes from '../../Utils/routes.json';
import { Link } from 'react-router-dom';
import { UserData } from '../../Authentication/UserDataContext';
import ILogin from '../../Types/ILogin';

const LoginComponent = (): JSX.Element => {
    const { register, handleSubmit, reset } = useForm<ILogin>();
    const { setUserData } = useContext(UserData);

    const onSubmit = ({ email, password }: ILogin) => {
        if (email === 'admin@admin.pl' && password === 'admin123' && setUserData) {
            setUserData({ isLoggedIn: true });
            return reset();
        }
    }

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
                    className='field-input'
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
                    className='field-input'
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