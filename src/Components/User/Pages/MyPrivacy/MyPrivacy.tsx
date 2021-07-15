import React, { useEffect, useState } from 'react';
import Following from './Components/Following';
import FriendRequest from './Components/FriendRequest';
import SeeFuturePosts from './Components/SeeFuturePosts';
import FriendList from './Components/FriendList';
import './Styles/MyPrivacyPage.scss';
import Tag from './Components/Tag';
import EmailAddress from './Components/EmailAddress';
import PhoneNumber from './Components/PhoneNumber';
import getUserPrivacy from './Functions/getUserPrivacy';
import IPrivacyInfo from '../../../../Utils/Types/IPrivacyInfo';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import UserPrivacyTemplate from '../../../Global/Templates/UserPrivacyTemplate';

const MyPrivacy = (): JSX.Element => {
    const [userPrivacy, setUserPrivacy] = useState<IPrivacyInfo | null>(null);
    const sectionHeader = 'My Privacy';

    useEffect(() => {
        const initalizeUserPrivacy = async () => {
            const { isSuccess, privacyInfo } = await getUserPrivacy();

            if (isSuccess && privacyInfo)
                return setUserPrivacy(privacyInfo);

            return null;
        }

        initalizeUserPrivacy();
    }, [])

    if (!userPrivacy)
        return <UserPrivacyTemplate />

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-privacy-page-wrapper'>
                <SeeFuturePosts {...userPrivacy} />
                <Following {...userPrivacy} />
                <FriendRequest {...userPrivacy} />
                <FriendList {...userPrivacy} />
                <Tag {...userPrivacy} />
                <PhoneNumber {...userPrivacy} />
                <EmailAddress {...userPrivacy} />
            </div>
        </SectionComponent>
    )
};

export default MyPrivacy;