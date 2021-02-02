import React, { useState, createContext, ReactNode } from 'react';

interface UseUserDataInterface {
    children: ReactNode;
}

interface UserDataContext {
    userData?: UserDataContainer;
    setUserData?: (value: UserDataContainer) => void;
}

interface UserDataContainer {
    isLoggedIn?: boolean;
}

export const UserData = createContext<UserDataContext>({});

export const UseUserData = ({ children }: UseUserDataInterface): JSX.Element => {
    const [userData, setUserData] = useState<UserDataContainer>({ isLoggedIn: true });

    return (
        <UserData.Provider value={{ userData, setUserData }}>
            {children}
        </UserData.Provider>
    )
}