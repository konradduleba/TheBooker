import React from 'react';
import IPersonData from '../../Types/IPersonData';
import SectionComponent from '../GlobalComponents/SectionComponent';

const UserInfoComponent = ({ accountInfo, basicInfo, contactInfo, personalInfo }: IPersonData): JSX.Element => {

    const renderMultipleValues = (table: string[]) => {
        return table.map((value, index) => <span key={value}>{index ? `, ${value}` : value}</span>)
    };

    return (
        <SectionComponent header="Information" style={{ width: '100%' }}>
            <div>
                <h2>{accountInfo.header}</h2>
                <p>Name: {accountInfo.name} {accountInfo.lastName}</p>
                <p>Member Since: {accountInfo.memberSince}</p>
                <p>Last Update: {accountInfo.lastUpdate}</p>
            </div>
            <div>
                <h2>{basicInfo.header}</h2>
                <p>School: {basicInfo.school}</p>
                <p>Status: {basicInfo.status}</p>
                <p>Sex: {basicInfo.sex}</p>
                <p>City: {basicInfo.city}</p>
                <p>Birthday: {basicInfo.birthday}</p>
            </div>
            <div>
                <h2>{contactInfo.header}</h2>
                <p>Email: {contactInfo.email}</p>
                <p>Phone: {contactInfo.phone}</p>
            </div>
            <div>
                <h2>{personalInfo.header}</h2>
                <p>Looking For: {personalInfo.lookingFor}</p>
                <p>Interested In: {personalInfo.interestedIn}</p>
                <p>Relationship Status: {personalInfo.relationshipStatus} with {personalInfo.partner}</p>
                <p>Interests: {personalInfo.interests.length && renderMultipleValues(personalInfo.interests)}</p>
                <p>Favourite Music: {personalInfo.favouriteMusic.length && renderMultipleValues(personalInfo.favouriteMusic)}</p>
                <p>Favourite Movies: {personalInfo.favouriteMovies.length && renderMultipleValues(personalInfo.favouriteMovies)}</p>
                <p>About Me: {personalInfo.aboutMe}</p>
            </div>
        </SectionComponent>
    )
};

export default UserInfoComponent;