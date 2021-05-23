import React from 'react';
import UserProfile from '../../User/Global/UserProfile/UserProfile';
import defaultUserData from '../../../Utils/Defaults/defaultUserData.json';

const UserProfileTemplate = (): JSX.Element => <UserProfile personData={defaultUserData} isThatMe={true} isTemplate={true} />

export default UserProfileTemplate;