import React from 'react';
import IPersonData from '../../../../GlobalTypes/IPersonData/IPersonData';
import SectionComponent from '../../../Global/Section/Section';
import validateAccountInfo from '../Functions/validateAccountInfo';
import validatePersonalInfo from '../Functions/validatePersonalInfo';
import ValidateEntityVisibility from './ValidateEntityVisibility';

const UserInfoComponent = ({ accountInfo, basicInfo, contactInfo, personalInfo }: IPersonData): JSX.Element => {
    const validatedAccountData = validateAccountInfo(accountInfo);
    const validatedPersonalInfo = validatePersonalInfo(personalInfo);

    return (
        <SectionComponent header="Information" style={{ width: '100%' }}>
            <ValidateEntityVisibility header={"Account Info"} entities={validatedAccountData} />
            <ValidateEntityVisibility header={"Basic Info"} entities={basicInfo} />
            <ValidateEntityVisibility header={"Contact Info"} entities={contactInfo} />
            <ValidateEntityVisibility header={"Personal Info"} entities={validatedPersonalInfo} />
        </SectionComponent>
    );

}
export default UserInfoComponent;