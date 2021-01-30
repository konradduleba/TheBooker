import React,{useContext} from 'react';
import MenuList from '../GlobalComponents/MenuList';
import { UserData } from '../../Authentication/UserDataContext';
import { menuListLoggedIn, menuListNotLoggedIn } from '../../Utils/menuRoutes';
import { Link } from 'react-router-dom';
import TheFacebookBanner from '../../Assets/the-facebook-banner.jpg';
import TheFacebookLogo from '../../Assets/the-facebook-logo.jpg';
import './BannerComponent.scss';

const BannerComponent = ():JSX.Element => {
    const {userData} = useContext(UserData);

    const menuList = userData?.isLoggedIn ? menuListLoggedIn : menuListNotLoggedIn;

    return (
        <section className='banner-wrapper'>
            <img src={TheFacebookBanner} alt="the facebook banner"/>
            <div className='logo-and-menu'>
                <Link to='/'><img src={TheFacebookLogo} alt="the facebook logo"/></Link>
                <MenuList menuList={menuList}/>
            </div>
        </section>
    )
}

export default BannerComponent;