import React, { useContext } from 'react';
import { menuListLoggedIn, menuListNotLoggedIn } from '../../../Routes/Utils/menuRoutes';
import { Link } from 'react-router-dom';
import TheBookerBanner from '../../../Assets/thebooker-banner.jpg';
import TheBookerLogo from '../../../Assets/thebooker-logo.jpg';
import './Styles/Banner.scss';
import { UserData } from '../../../Contexts/UserDataContext/UserData';
import MenuList from '../MenuList/MenuList';

const BannerComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isUserLoggedIn = userData?.isLoggedIn ? true : false;

    const menuList = isUserLoggedIn ? menuListLoggedIn : menuListNotLoggedIn;

    return (
        <section className='banner-wrapper'>
            <img src={TheBookerBanner} alt="the TheBooker banner" />
            <div className='logo-and-menu'>
                <Link to='/'><img src={TheBookerLogo} alt="the TheBooker logo" /></Link>
                <MenuList menuList={menuList} isUserLoggedIn={isUserLoggedIn} />
            </div>
        </section>
    )
}

export default BannerComponent;