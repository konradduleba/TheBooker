import React from 'react';
import { Link } from 'react-router-dom';
import ISendMessageOrPoke from '../Types/ISendMessageOrPoke';

const SendMessageOrPoke = ({ name }: ISendMessageOrPoke): JSX.Element => (
    <div className='send-message-or-poke-wrapper'>
        <div>
            <Link to={'#'}>Send {name} a Message</Link>
        </div>
        <div>
            <p>Poke Him!</p>
        </div>
    </div>
);

export default SendMessageOrPoke;