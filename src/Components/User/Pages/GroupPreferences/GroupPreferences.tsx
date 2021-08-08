import React from 'react';
import { useParams } from 'react-router';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import WallDisplay from './Components/WallDisplay';
import ESelectOptions from './Enums/ESelectOptions';
import './Styles/GroupPreferencesPage.scss';
import IGroupPreferencesParams from './Types/IGroupPreferencesParams';

const GroupPreferences = (): JSX.Element => {
    const { id } = useParams<IGroupPreferencesParams>();

    const sectionHeader = 'Your preferences';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='group-preferences-page-wrapper'>
                <WallDisplay id={id} wallDisplayOption={ESelectOptions.All} />
            </div>
        </SectionComponent>
    )
}

export default GroupPreferences;