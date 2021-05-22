import React, { useState, createContext, useEffect } from 'react';
import checkIfUserIsLoggedIn from './Functions/checkIfUserIsLoggedIn';
import getContextData from './Functions/getContextData';
import getLogoutUser from './Functions/getLogoutUser';
import IUserDataContainer from './types/IUserDataContainer';
import IUserDataContext from './types/IUserDataContext';
import UseUserDataInterface from './types/IUseUserDataInterface';

export const UserData = createContext<IUserDataContext>({});

export const UseUserData = ({ children }: UseUserDataInterface): JSX.Element => {
    const [userData, setUserData] = useState<IUserDataContainer>(checkIfUserIsLoggedIn());
    const { isLoggedIn } = userData;

    const logoutUser = async () => {
        const { ok } = await getLogoutUser();
        if (ok) {
            localStorage.removeItem('isLoggedIn');

            return setUserData({ isLoggedIn: false });
        }

        return null;
    }

    useEffect(() => {
        const getAndSetUserData = async () => {
            const data = await getContextData();

            return setUserData(data);
        }

        if (isLoggedIn)
            getAndSetUserData();

    }, [isLoggedIn])

    return (
        <UserData.Provider value={{ userData, setUserData, logoutUser }}>
            {children}
        </UserData.Provider>
    )
}