import React from 'react';
import IPersonData from '../../../GlobalTypes/IPersonData/IPersonData';
import SectionComponent from '../../Global/Section/Section';
import displayMultipleUserValues from '../Functions/displayMultipleUserValues';

const UserInfoComponent = ({ accountInfo, basicInfo, contactInfo, personalInfo }: IPersonData): JSX.Element => (
    <SectionComponent header="Information" style={{ width: '100%' }}>
        <div className='data-wrapper'>
            <h2>{accountInfo.header}</h2>
            <div className='info-container'>
                <div className='tag-container'>
                    <p>
                        <span>Name:</span>
                        <span>{accountInfo.name} {accountInfo.lastName}</span>
                    </p>
                    <p>
                        <span>Member Since:</span>
                        <span>{accountInfo.memberSince}</span>
                    </p>
                    <p>
                        <span>Last Update:</span>
                        <span>{accountInfo.lastUpdate}</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='data-wrapper'>
            <h2>{basicInfo.header}</h2>
            <div className='info-container'>
                <p>
                    <span>School:</span>
                    <span>{basicInfo.school}</span>
                </p>
                <p>
                    <span>Status:</span>
                    <span>{basicInfo.status}</span>
                </p>
                <p>
                    <span>Sex:</span>
                    <span>{basicInfo.sex}</span>
                </p>
                <p>
                    <span>City:</span>
                    <span>{basicInfo.city}</span>
                </p>
                <p>
                    <span>Birthday:</span>
                    <span>{basicInfo.birthday}</span>
                </p>
            </div>
        </div>
        <div className='data-wrapper'>
            <h2>{contactInfo.header}</h2>
            <div className='info-container'>
                <p>
                    <span>Email:</span>
                    <span>{contactInfo.email}</span>
                </p>
                <p>
                    <span>Phone:</span>
                    <span>{contactInfo.phone}</span>
                </p>
            </div>
        </div>
        <div className='data-wrapper'>
            <h2>{personalInfo.header}</h2>
            <div className='info-container'>
                <p>
                    <span>Looking For:</span>
                    <span>{personalInfo.lookingFor}</span>
                </p>
                <p>
                    <span>Interested In:</span>
                    <span>{personalInfo.interestedIn}</span>
                </p>
                <p>
                    <span>Relationship Status:</span>
                    <span>{personalInfo.relationshipStatus} with {personalInfo.partner}</span>
                </p>
                <p>
                    <span>Interests:</span>
                    <span>{personalInfo.interests.length && displayMultipleUserValues(personalInfo.interests)}</span>
                </p>
                <p>
                    <span>Favourite Music:</span>
                    <span>{personalInfo.favouriteMusic.length && displayMultipleUserValues(personalInfo.favouriteMusic)}</span>
                </p>
                <p>
                    <span>Favourite Movies:</span>
                    <span>{personalInfo.favouriteMovies.length && displayMultipleUserValues(personalInfo.favouriteMovies)}</span>
                </p>
                <p>
                    <span>About Me:</span>
                    <span>{personalInfo.aboutMe}</span>
                </p>
            </div>
        </div>
    </SectionComponent>
);

export default UserInfoComponent;