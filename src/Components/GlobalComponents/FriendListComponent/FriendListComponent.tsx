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
import IPersonData from '../../../GlobalTypes/IPersonData/IPersonData';

const FriendListComponent = ({ limit }: IFriendListComponent): JSX.Element => {
    const { userData } = useContext(UserData);
    const [friendList, setFriendList] = useState<IRandomPerson[]>([]);

    const userInfo: IPersonData = userData?.userData ? userData.userData : defaultUser;

    const sectionHeader: string = createSectionHeader(userInfo, friendList);

    useEffect((): void => setFriendList(testFriendList), []);

    return (
        <SectionComponent header={sectionHeader} style={{ width: '100%' }}>
            <div className='friend-list-container'>
                {limit ?
                    <DisplayFriends friendList={generateFriendsArray(friendList, limit)} />
                    :
                    <DisplayFriends friendList={friendList} />
                }
            </div>
        </SectionComponent>
    )
};

export default FriendListComponent;