import React, { useEffect, useState } from 'react';
import SectionComponent from '../Section/Section';
import IFriendListComponent from './Types/IFriendListComponent';
import IRandomPerson from './Types/IRandomPerson';
import DisplayFriends from './Components/DisplayFriends';
import createSectionHeader from './Functions/createSectionHeader';
import generateFriendsArray from './Functions/generateFriendsArray';
import { useParams } from 'react-router';
import getMyFriendList from './Functions/getMyFriendList';
import getUserFriendList from './Functions/getUserFriendList';
import IFriendParams from './Types/IFriendParams';

const FriendListComponent = ({ limit, accountInfo, isThatMe }: IFriendListComponent): JSX.Element => {
    const [friendList, setFriendList] = useState<IRandomPerson[]>([]);
    const { id } = useParams<IFriendParams>();

    const sectionHeader: string = createSectionHeader(accountInfo, friendList, isThatMe);

    useEffect((): void => {
        const getFriendList = async () => {
            const incomingFriendList = isThatMe ? await getMyFriendList() : await getUserFriendList(id);

            return setFriendList(incomingFriendList);
        }

        getFriendList();
    }, [isThatMe, id]);

    return (
        <SectionComponent header={sectionHeader} style={{ width: '100%' }}>
            <div className='friend-list-container'>
                <DisplayFriends friendList={generateFriendsArray(friendList, limit)} />
            </div>
        </SectionComponent>
    )
};

export default FriendListComponent;