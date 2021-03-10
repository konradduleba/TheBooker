import React from 'react';
import IRenderUserList from '../Types/IRenderUserList';

const RenderUserList = ({ userList }: IRenderUserList): JSX.Element => (
    <div className='user-list-wrapper'>
        {userList.map(({ id, photo, name, status, year, phone, field, house }) => <div key={`${name}${id}`} className='user-container'>
            <div className='info-container'>
                <img src={photo} alt={name} />
                <ul>
                    <li>
                        <span>Name:</span>
                        <span>{name}</span>
                    </li>
                    <li>
                        <span>Status:</span>
                        <span>{status}</span>
                    </li>
                    <li>
                        <span>Year:</span>
                        <span>{year}</span>
                    </li>
                    {phone &&
                        <li>
                            <span>Phone:</span>
                            <span>{phone}</span>
                        </li>
                    }
                    {field &&
                        <li>
                            <span>Field:</span>
                            <span>{field}</span>
                        </li>
                    }
                    {house &&
                        <li>
                            <span>House:</span>
                            <span>{house}</span>
                        </li>
                    }
                </ul>
            </div>
            <div className='option-container'>
                <button className='normal-button'>View Profile</button>
                <button className='normal-button'>Add to Friends</button>
                <button className='normal-button'>Poke Him</button>
                <button className='normal-button'>Send Message</button>
            </div>
        </div>)}
    </div>
);

export default RenderUserList;