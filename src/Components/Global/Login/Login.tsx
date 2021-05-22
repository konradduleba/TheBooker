import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import routes from '../../../Utils/routes.json';
import { Link } from 'react-router-dom';
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import ILogin from './Types/ILogin';
import userLogin from './Functions/userLogin';
import getUserData from './Functions/getUserData';
import setLocalStorageData from './Functions/setLocalStorageData';

const LoginComponent = (): JSX.Element => {
    const { register, handleSubmit, reset } = useForm<ILogin>();
    const { setUserData } = useContext(UserData);

    const onSubmit = async ({ email, password }: ILogin) => {
        if (setUserData) {
            const { isSuccess, error } = await userLogin(email, password);

            if (isSuccess) {
                setLocalStorageData();

                const { isSuccess, userData } = await getUserData();

                if (isSuccess)
                    return setUserData({
                        isLoggedIn: true,
                        userData
                    })

            }

            if (error) {
                console.log(error);
            }

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
                    <button type='button'>{routes.register.title}</button>
                </Link>
                <input type="submit" value="login" onClick={() => console.log('tutaj')} />
            </div>
        </form>
    )
};

export default LoginComponent;