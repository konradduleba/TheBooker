import React, { useState, createContext } from 'react';
import UserDataContainer from '../Types/IUserDataContainer';
import UserDataContext from '../Types/IUserDataContext';
import UseUserDataInterface from '../Types/IUseUserDataInterface';
import PersonTestData from '../Utils/PersonTestData.json';

export const UserData = createContext<UserDataContext>({});

export const UseUserData = ({ children }: UseUserDataInterface): JSX.Element => {
    const [userData, setUserData] = useState<UserDataContainer>({ isLoggedIn: true, userData: PersonTestData });

    return (
        <UserData.Provider value={{ userData, setUserData }}>
            {children}
        </UserData.Provider>
    )
}