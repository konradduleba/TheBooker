import React from 'react';
import UserProfile from '../../User/Global/UserProfileComponent/UserProfileComponent';
import defaultUserData from '../../../Utils/Defaults/defaultUserData.json';

const UserProfileTemplate = (): JSX.Element => <UserProfile personData={defaultUserData} isThatMe={true} isTemplate={true} />

export default UserProfileTemplate;