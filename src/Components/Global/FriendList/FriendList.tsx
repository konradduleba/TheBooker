import React, { useEffect, useState } from 'react';
import SectionComponent from '../Section/Section';
import IFriendListComponent from './Types/IFriendListComponent';
import IRandomPerson from './Types/IRandomPerson';
import DisplayFriends from './Components/DisplayFriends';
import createSectionHeader from './Functions/createSectionHeader';
import testFriendList from './testFriendList';
import generateFriendsArray from './Functions/generateFriendsArray';

const FriendListComponent = ({ limit, accountInfo }: IFriendListComponent): JSX.Element => {
    const [friendList, setFriendList] = useState<IRandomPerson[]>([]);

    const sectionHeader: string = createSectionHeader(accountInfo, friendList);

    useEffect((): void => setFriendList(testFriendList), []);

    return (
        <SectionComponent header={sectionHeader} style={{ width: '100%' }}>
            <div className='friend-list-container'>
                <DisplayFriends friendList={generateFriendsArray(friendList, limit)} />
            </div>
        </SectionComponent>
    )
};

export default FriendListComponent;