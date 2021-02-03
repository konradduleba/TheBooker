import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import Person from '../../Assets/person.jpg';
import IFriendListComponent from '../../Types/IFriendListComponent';

const testFriendList = [{
    name: 'Natalia Przybyło',
    photo: Person
},
{
    name: 'Konrad Dulęba',
    photo: Person
},
{
    name: 'Jędrzej Knapik',
    photo: Person
},
{
    name: 'Sebastian Warchoł',
    photo: Person
},
{
    name: 'Oskar Budzik',
    photo: Person
},
{
    name: 'Mateusz Sraczka',
    photo: Person
}]

const FriendListComponent = ({ name }: IFriendListComponent): JSX.Element => (
    <SectionComponent header={`${name}'s friends`} style={{ width: '100%' }}>
        <div className='friend-list-container'>
            {testFriendList.map(({ name, photo }) => <div key={name}>
                <img src={photo} alt={`${name}`} />
                <p>{name}</p>
            </div>)}
        </div>
    </SectionComponent>
);

export default FriendListComponent;