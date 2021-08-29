import IUserProfile from 'Components/User/Pages/UserProfile/Types/IUserProfile';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import sendFriendRequest from '../Functions/sendFriendRequest';
import ISendMessageOrPoke from '../Types/ISendMessageOrPoke';

const SendMessageOrPoke = ({ accountInfo, isOnFriendList, inviteStatus }: ISendMessageOrPoke): JSX.Element => {
    const { name } = accountInfo;
    const { id } = useParams<IUserProfile>();
    const [inviteStatusMessage, setInviteStatusMessage] = useState(inviteStatus ? 'Invite Sended' : 'Send a friend request');

    const sendRequest = async () => {
        const { message } = await sendFriendRequest(id);

        setInviteStatusMessage(message);
    }

    if (isOnFriendList)
        return (
            <div className='send-message-or-poke-wrapper'>
                <div>
                    <Link to={'#'}>Send {name} a Message</Link>
                </div>
                <div>
                    <p>Poke Him!</p>
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