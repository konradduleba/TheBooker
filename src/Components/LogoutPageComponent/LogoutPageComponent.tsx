import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';
import './Styles/LogoutPageComponent.scss';

const LogoutPageComponent = (): JSX.Element => {
    const { setUserData } = useContext(UserData);

    const logout = (): void => setUserData && setUserData({ isLoggedIn: false });

    return (
        <SectionComponent header="Logout from TheBooker">
            <div className='logout-page-wrapper column-with-padding'>
                <h1 className='header'>[ Logout ]</h1>
                <p>Are you sure you want to logout from TheBooker</p>
                <div>
                    <button className='normal-button' onClick={logout}>Yes, I am</button>
                    <Link to='/'><button className='normal-button'>No, I am not</button></Link>
                </div>
            </div>
        </SectionComponent>
    )
}
export default LogoutPageComponent;