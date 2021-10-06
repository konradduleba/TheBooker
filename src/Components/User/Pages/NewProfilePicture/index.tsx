import SectionComponent from 'Components/Global/Section/Section';
import React, { useEffect, useState } from 'react';
import ActualProfilePicture from './Components/ActualProfilePicture';
import PickPhoto from './Components/PickPhoto';
import getMyProfilePicture from './Functions/getMyProfilePicture';
import './Styles/NewProfilePicture.scss'

const NewProfilePicture = (): JSX.Element => {
    const [profilePicture, setProfilePicture] = useState<string>('')
    const [newProfilePicture, setNewProfilePicture] = useState<Blob | null | string>(null)

    useEffect(() => {
        const getProfilePicture = async () => {
            const { imagePath } = await getMyProfilePicture();

            return setProfilePicture(imagePath);
        }

        getProfilePicture()
    }, [newProfilePicture])

    console.log(profilePicture);

    return (
        <SectionComponent header='New Profile Picture'>
            <div className='new-profile-picture-wrapper'>
                <ActualProfilePicture picture={profilePicture} setNewProfilePicture={setNewProfilePicture} />
                <div className='new-picture'>
                    <PickPhoto setNewProfilePicture={setNewProfilePicture} />
                </div>
            </div>
        </SectionComponent>
    )
}

export default NewProfilePicture;