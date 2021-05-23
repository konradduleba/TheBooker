import React from 'react';
import { useParams } from 'react-router';
import ILeaveGroupParams from './Types/ILeaveGroupParams';
import { groupProfile } from '../../../../Routes/Utils/routes.json';
import './Styles/LeaveGroupPage.scss';
import { Link } from 'react-router-dom';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const LeaveGroupPage = (): JSX.Element => {
    const { id, name } = useParams<ILeaveGroupParams>();

    return (
        <SectionComponent header='Are you sure about leaving this group?'>
            <HeaderMeta title={name} />
            <div className='leave-group-page-wrapper column-with-padding'>
                <h1>[ Leave Group ]</h1>
                <p>Do you wanna leave {name} ?</p>
                <div>
                    <button className='normal-button'>Yes, {`I'm`} sure</button>
                    <Link to={`/app${groupProfile.href}/${id}`}>
                        <button className='normal-button'>No, take me back</button>
                    </Link>
                </div>
            </div>
        </SectionComponent>
    )
}

export default LeaveGroupPage;