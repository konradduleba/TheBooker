import React from 'react';
import { Link } from 'react-router-dom';
import { MenuListTypes } from '../../Utils/globalTypes';

interface ListOfItems{
    menuList: MenuListTypes[];
}

const MenuList = ({menuList}:ListOfItems):JSX.Element => (
    <ul>
        {menuList.map(({title, href}: MenuListTypes)=> <li key={title}><Link to={href}>{title}</Link></li>)}
    </ul>
);

export default MenuList;