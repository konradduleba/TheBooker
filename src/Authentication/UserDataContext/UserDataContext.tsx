import React, { useState, createContext } from 'react';
import IUserDataContainer from './types/IUserDataContainer';
import IUserDataContext from './types/IUserDataContext';
import UseUserDataInterface from './types/IUseUserDataInterface';
import PersonTestData from '../../Utils/PersonTestData.json';

export const UserData = createContext<IUserDataContext>({});

export const UseUserData = ({ children }: UseUserDataInterface): JSX.Element => {
    const [userData, setUserData] = useState<IUserDataContainer>({ isLoggedIn: true, userData: PersonTestData });

    return (
        <UserData.Provider value={{ userData, setUserData }}>
            {children}
        </UserData.Provider>
    )
}