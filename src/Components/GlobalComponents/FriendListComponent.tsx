import React, { useContext } from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import Person from '../../Assets/person.jpg';
import { UserData } from '../../Authentication/UserDataContext';
import defaultUser from '../../Utils/defaultUserData.json';
import IFriendListComponent from '../../Types/IFriendListComponent';

const testFriendList = [{
    ID: 0,
    name: 'Test Testowy',
    photo: Person
},
{
    ID: 1,
    name: 'Natalia Przybyło',
    photo: Person
},
{
    ID: 2,
    name: 'Konrad Dulęba',
    photo: Person
},
{
    ID: 3,
    name: 'Jędrzej Knapik',
    photo: Person
},
{
    ID: 4,
    name: 'Sebastian Warchoł',
    photo: Person
},
{
    ID: 5,
    name: 'Oskar Budzik',
    photo: Person
},
{
    ID: 6,
    name: 'Mateusz Sraczka',
    photo: Person
},
{
    ID: 7,
    name: 'Mateusz Florczyk',
    photo: Person
},
{
    ID: 8,
    name: 'Jakub Łoś',
    photo: Person
}]

const randNumber = () => Math.floor(Math.random() * testFriendList.length);

const FriendListComponent = ({ limit }: IFriendListComponent): JSX.Element => {
    const { userData } = useContext(UserData);
    const isThisMe = userData?.userData?.ID === defaultUser.ID ? true : false;

    const userProfileName = isThisMe ? 'My Friends' : `${userData?.userData?.accountInfo.name} ${userData?.userData?.accountInfo.lastName}'s Friends`;

    const showLimitedFriends = () => {
        const randomNumbers: number[] = [];

        if (limit) {
            for (let i = 0; i < limit; i++) {
                let status = false;

                while (!status) {
                    const number = randNumber();
                    if (!randomNumbers.includes(number)) {
                        randomNumbers.push(number);

                        status = true;
                    }
                    console.log('heja')
                }
            }
        }

        return console.log(randomNumbers)
    }

    return (
        <SectionComponent header={userProfileName} style={{ width: '100%' }}>
            {showLimitedFriends()}
            <div className='friend-list-container'>
                {testFriendList.map(({ name, photo }) => <div key={name}>
                    <img src={photo} alt={`${name}`} />
                    <p>{name}</p>
                </div>)}
            </div>
        </SectionComponent>
    )
};

export default FriendListComponent;