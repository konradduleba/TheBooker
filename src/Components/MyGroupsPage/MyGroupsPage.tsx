import React from 'react';
import SectionComponent from '../Global/Section/Section';
import testGroupList from './testGroupList';
import './Styles/MyGroupsPage.scss';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import DisplayGroupsUserBelongTo from './Components/DisplayGroupsUserBelongTo';
import { Link } from 'react-router-dom';
import { search, createGroup } from '../../Utils/routes.json';
import ESearchTypes from '../SearchPage/Enums/ESearchTypes';

const MyGroupsComponent = (): JSX.Element => (
    <SectionComponent header={`My Groups (${testGroupList.length})`}>
        <HeaderMeta title='My Groups' />
        <div className='my-groups-page-wrapper'>
            <nav>
                <Link to={`/app${search.href}/${ESearchTypes.GROUP}`}>
                    <button className='normal-button'>Find Group</button>
                </Link>
                <Link to={`/app${createGroup.href}`}>
                    <button className='normal-button'>Create Group</button>
                </Link>
            </nav>
            <DisplayGroupsUserBelongTo groupList={testGroupList} />
        </div>
    </SectionComponent>
);

export default MyGroupsComponent;