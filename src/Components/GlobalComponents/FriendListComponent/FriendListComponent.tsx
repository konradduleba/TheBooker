import React, { useContext, useEffect, useState } from 'react';
import SectionComponent from '../SectionComponent/SectionComponent';
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import defaultUser from '../../../Utils/defaultUserData.json';
import IFriendListComponent from './Types/IFriendListComponent';
import IRandomPerson from './Types/IRandomPerson';
import DisplayFriends from './Components/DisplayFriends';
import createSectionHeader from './Functions/createSectionHeader';
import testFriendList from './testFriendList';
import generateFriendsArray from './Functions/generateFriendsArray';

const FriendListComponent = ({ limit }: IFriendListComponent): JSX.Element => {
    const { userData } = useContext(UserData);
    const [friendList, setFriendList] = useState<IRandomPerson[]>([]);

    const userInfo = userData?.userData ? userData.userData : defaultUser;

    const sectionHeader = createSectionHeader(userInfo, friendList);

    useEffect(() => setFriendList(testFriendList), []);

    return (
        <SectionComponent header={sectionHeader} style={{ width: '100%' }}>
            <div className='friend-list-container'>
                {limit ? <DisplayFriends {...generateFriendsArray(friendList)} /> : <DisplayFriends {...friendList} />}
            </div>
        </SectionComponent>
    )
};

export default FriendListComponent;