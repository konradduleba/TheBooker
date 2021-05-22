import React, { useEffect, useState } from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import MyAccountTemplate from '../Global/Templates/MyAccountTemplate';
import Contact from './Components/Contact';
import Deactivate from './Components/Deactivate';
import Delete from './Components/Delete';
import Password from './Components/Password';
import UserCredentials from './Components/UserCredentials';
import Username from './Components/Username';
import getAccountData from './Functions/getAccountData';
import './Styles/MyAccountPage.scss';
import IUserData from './Types/IUserData';

const MyAccountPage = (): JSX.Element => {
    const [accountData, setAccountData] = useState<IUserData | null>(null);

    useEffect(() => {
        const getAndSetAccountData = async () => {
            const { isSuccess, userData } = await getAccountData();

            if (isSuccess)
                return setAccountData(userData);

            return null;
        }

        getAndSetAccountData();
    }, [])

    const sectionHeader = 'My Account';

    if (!accountData)
        return <MyAccountTemplate />

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-account-page-wrapper'>
                <UserCredentials {...accountData} />
                <Username {...accountData} />
                <Contact {...accountData} />
                <Password />
                <Delete />
                <Deactivate />
            </div>
        </SectionComponent>
    )
};

export default MyAccountPage;