import DisplayFriends from 'Components/Global/FriendList/Components/DisplayFriends';
import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import SectionComponent from 'Components/Global/Section/Section';
import React, { useEffect, useState } from 'react';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import getFriendList from './Functions/getFriendList';
import './Styles/MyFriends.scss';

const MyFriendsComponent = (): JSX.Element => {
    const [friendList, setFriendList] = useState<IRandomPerson[] | []>([]);

    useEffect(() => {
        const getUserFriendList = async () => {
            const list = await getFriendList();

            setFriendList(list);
        }

        getUserFriendList();
    }, []);

    return (
        <SectionComponent header='My Friends'>
            <HeaderMeta title='My Friends' />
            <div className='friend-list-container'>
                {friendList.length ?
                    <DisplayFriends friendList={friendList} /> :
                    <p>Your Friend List is empty.</p>
                }
            </div>
        </SectionComponent>
    )
}


export default MyFriendsComponent;