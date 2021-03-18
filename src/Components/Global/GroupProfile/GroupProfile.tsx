import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import HeaderMeta from '../HeaderMeta/HeaderMeta';
import SectionComponent from '../Section/Section';
import IGroupData from './Types/IGroupData';
import IGroupProfile from './Types/IGroupProfile';
import testProfileGroup from './testProfileGroup';
import defaultProfileGroup from './defaultProfileGroup';
import Description from './Components/Description';
import Officers from './Components/Officers';
import Picture from './Components/Picture';
import './Styles/GroupProfile.scss';
import RecentDiscussion from './Components/RecentDiscussion';
import Options from './Components/Options';

const GroupProfile = (): JSX.Element => {
    const [groupData, setGroupData] = useState<IGroupData>(defaultProfileGroup);
    const { id } = useParams<IGroupProfile>();
    const { groupInfo, officers } = groupData;
    const { name, description, picture } = groupInfo;
    console.log(id);

    useEffect(() => setGroupData(testProfileGroup), [id])

    return (
        <SectionComponent header={name}>
            <HeaderMeta title={name} />
            <div className='group-profile-wrapper'>
                <div className='left-side'>
                    <Description description={description} />
                    {officers.length ? <Officers officers={officers} /> : null}
                    <RecentDiscussion id={id} />
                </div>
                <div className='right-side'>
                    <Picture picture={picture} />
                    <Options id={id} />
                </div>
            </div>
        </SectionComponent>
    )
}

export default GroupProfile;