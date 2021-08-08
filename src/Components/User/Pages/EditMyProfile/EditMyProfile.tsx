import React, { useState, useEffect } from 'react';
import IPersonData from '../../../../Utils/Types/IPersonData';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import EditUserProfileTemplate from '../../../Global/Templates/EditUserProfileTemplate';
import EditUserInformation from './Components/EditUserInformation';
import HomeButton from './Components/HomeButton';
import Navigation from './Components/Navigation';
import getMyUserData from './Functions/getMyUserData';
import './Styles/EditMyProfilePage.scss';
import IAvaibleUserDataToEdit from './Types/IAvaibleUserDataToEdit';
import ISaveEditField from './Types/ISaveEditField';

const EditMyProfile = (): JSX.Element => {
    const [userData, setUserData] = useState<IPersonData | null>(null);
    const [editedData, setEditedData] = useState<IAvaibleUserDataToEdit | null>(null);

    const sectionHeader = "Edit My Profile";

    const updateEditedData = (value: ISaveEditField) => {
        for (const [key, fieldValue] of Object.entries(value)) {
            return setEditedData(prevState => ({ ...prevState, [key]: fieldValue }))
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            const { isSuccess, userData } = await getMyUserData();

            if (isSuccess)
                return setUserData(userData);

            return null;
        }

        getUserData();
    }, [])

    if (!userData)
        return <EditUserProfileTemplate />

    const { accountInfo, basicInfo, contactInfo, personalInfo } = userData;

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='edit-my-profile-page-wrapper'>
                <Navigation editedData={editedData} />
                <div className='edit-data-container'>
                    <EditUserInformation data={accountInfo} header="Account Information" setEditedData={updateEditedData} />
                    <EditUserInformation data={basicInfo} header="Basic Information" setEditedData={updateEditedData} />
                    <EditUserInformation data={contactInfo} header="Contact Information" setEditedData={updateEditedData} />
                    <EditUserInformation data={personalInfo} header="Personal Information" setEditedData={updateEditedData} />
                    <HomeButton />
                </div>
            </div>
        </SectionComponent>
    )
}

export default EditMyProfile;