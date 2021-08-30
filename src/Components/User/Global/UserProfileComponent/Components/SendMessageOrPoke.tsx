import IUserProfile from 'Components/User/Pages/UserProfile/Types/IUserProfile';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import removeFromFriendList from '../Functions/removeFromFriendList';
import sendFriendRequest from '../Functions/sendFriendRequest';
import ISendMessageOrPoke from '../Types/ISendMessageOrPoke';

const SendMessageOrPoke = ({ accountInfo, isOnFriendList, inviteStatus }: ISendMessageOrPoke): JSX.Element => {
    const { name } = accountInfo;
    const { id } = useParams<IUserProfile>();
    const [inviteStatusMessage, setInviteStatusMessage] = useState(inviteStatus ? 'Invite Sended' : 'Send a friend request');
    const [deleteFriendStatusMessage, setDeleteFriendStatusMessage] = useState('Remove from Friends');

    const sendRequest = async () => {
        const { message } = await sendFriendRequest(id);

        setInviteStatusMessage(message);
    }

    const removeFriend = async () => {
        const { message } = await removeFromFriendList(id);

        setDeleteFriendStatusMessage(message);
    }

    if (isOnFriendList)
        return (
            <div className='send-message-or-poke-wrapper'>
                <div>
                    <Link to={'#'}>Send {name} a Message</Link>
                </div>
                <div>
                    <p>Poke!</p>
                </div>
                <div>
                    <p onClick={() => removeFriend()}>{deleteFriendStatusMessage}</p>
                </div>
            </div>
        );

    return (
        <div className='send-message-or-poke-wrapper'>
            <div>
                <p onClick={() => sendRequest()}>{inviteStatusMessage}</p>
            </div>
        </div>
    )
}

export default SendMessageOrPoke;