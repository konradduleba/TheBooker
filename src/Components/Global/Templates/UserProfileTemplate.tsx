import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import defaultUserData from '../../../Utils/defaultUserData.json';

const UserProfileTemplate = (): JSX.Element => <UserProfile personData={defaultUserData} isThatMe={true} isTemplate={true} />

export default UserProfileTemplate;