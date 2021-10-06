import React from 'react';
import SectionComponent from '../../../../Global/Section/Section';
import validateAccountInfo from '../Functions/validateAccountInfo';
import validatePersonalInfo from '../Functions/validatePersonalInfo';
import IUserInfoComponent from '../Types/IUserInfoComponent';
import EditMyProfileButton from './EditMyProfileButton';
import ValidateEntityVisibility from './ValidateEntityVisibility';

const UserInfoComponent = ({ personData, isMyProfile }: IUserInfoComponent): JSX.Element => {
    const { accountInfo, personalInfo, basicInfo, contactInfo } = personData;
    const validatedAccountData = validateAccountInfo(accountInfo);
    const validatedPersonalInfo = validatePersonalInfo(personalInfo);

    const header = <EditMyProfileButton header='Information' isThatMe={isMyProfile} />

    return (
        <SectionComponent header={header} style={{ width: '100%' }}>
            <ValidateEntityVisibility header={"Account Info"} entities={validatedAccountData} />
            <ValidateEntityVisibility header={"Basic Info"} entities={basicInfo} />
            <ValidateEntityVisibility header={"Contact Info"} entities={contactInfo} />
            <ValidateEntityVisibility header={"Personal Info"} entities={validatedPersonalInfo} />
        </SectionComponent>
    );

}
export default UserInfoComponent;