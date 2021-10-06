import SectionComponent from 'Components/Global/Section/Section';
import React from 'react';
import deleteMyProfilePicture from '../Functions/deleteMyProfilePicture';
import IActualProfilePicture from '../Types/IActualProfilePicture';

const ActualProfilePicture = ({ picture, setNewProfilePicture }: IActualProfilePicture): JSX.Element => {
    const onDelete = async () => {
        const result = await deleteMyProfilePicture();

        const { isSuccess } = result;

        if (!isSuccess)
            return null;

        return setNewProfilePicture('default-picture');
    }

    return (
        <SectionComponent header='Current Profile Picture'>
            <div className='actual-profile-picture'>
                <img src={picture} alt='profile' />
                <button className='normal-button' onClick={onDelete}>Delete photo</button>
            </div>
        </SectionComponent>
    )
}

export default ActualProfilePicture;