import React from 'react';
import defaultUserData from '../../../Utils/Defaults/defaultUserData.json';
import EditUserInformation from '../../User/Pages/EditMyProfilePage/Components/EditUserInformation';
import Navigation from '../../User/Pages/EditMyProfilePage/Components/Navigation';
import SectionComponent from '../Section/Section';

const EditUserProfileTemplate = (): JSX.Element => (
    <SectionComponent header='Edit My Profile'>
        <div className='edit-my-profile-page-wrapper'>
            <div className='edit-user-profile-template'>
                <Navigation editedData={null} />
                <div className='edit-data-container'>
                    <EditUserInformation
                        data={defaultUserData.accountInfo}
                        header="Account Information"
                    />
                    <EditUserInformation
                        data={defaultUserData.basicInfo}
                        header="Basic Information"
                    />
                    <EditUserInformation
                        data={defaultUserData.contactInfo}
                        header="Contact Information"
                    />
                    <EditUserInformation
                        data={defaultUserData.personalInfo}
                        header="Personal Information"
                    />
                </div>
            </div>
        </div>
    </SectionComponent>
)

export default EditUserProfileTemplate;