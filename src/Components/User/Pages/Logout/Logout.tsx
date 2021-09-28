import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../../../../Contexts/UserDataContext/UserData';
import SectionComponent from '../../../Global/Section/Section';
import './Styles/LogoutPage.scss';

const Logout = (): JSX.Element => {
    const { logoutUser } = useContext(UserData);

    const logout = (): void => logoutUser && logoutUser();

    return (
        <SectionComponent header="Logout from FriendsLibrary">
            <div className='logout-page-wrapper column-with-padding'>
                <h1 className='header'>[ Logout ]</h1>
                <p>Are you sure you want to logout from FriendsLibrary</p>
                <div>
                    <button className='normal-button' onClick={logout}>Yes, I am</button>
                    <Link to='/'><button className='normal-button'>No, I am not</button></Link>
                </div>
            </div>
        </SectionComponent>
    )
}
export default Logout;