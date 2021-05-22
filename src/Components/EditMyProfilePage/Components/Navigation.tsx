import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { myProfile } from '../../../Utils/routes.json';
import updateUserData from '../Functions/updateUserData';
import INavigation from '../Types/INavigation';

const Navigation = ({ editedData }: INavigation): JSX.Element => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const onSave = async () => {

        if (editedData) {
            const lastUpdate = new Date();
            const { isSuccess } = await updateUserData({ ...editedData, lastUpdate });

            if (isSuccess)
                return linkRef.current?.click();

            return null;
        }
    }

    return (
        <nav>
            <Link to={`/app${myProfile.href}`} ref={linkRef}><button className='normal-button'>Back</button></Link>
            <button className='normal-button' disabled={!editedData} onClick={onSave}>Apply Changes</button>
        </nav>
    );
}

export default Navigation;