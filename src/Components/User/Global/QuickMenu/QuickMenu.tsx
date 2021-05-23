import React, { useContext } from 'react';
import { UserData } from '../../../../Contexts/UserDataContext/UserData';
import { quickLinks } from '../../../../Routes/Utils/menuRoutes';
import MenuList from '../../../Global/MenuList/MenuList';
import './Styles/QuickMenu.scss';

const QuickMenuComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isUserLoggedIn = userData?.isLoggedIn ? true : false;

    return (
        <section className='quick-menu-wrapper'>
            <MenuList menuList={quickLinks} isUserLoggedIn={isUserLoggedIn} />
        </section>
    )
}
export default QuickMenuComponent;