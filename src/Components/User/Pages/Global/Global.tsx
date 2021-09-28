import React, { useEffect, useState } from 'react';
import './Styles/GlobalPage.scss';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import RenderSearchResults from '../Search/Components/RenderSearchResults';
import getRandomPeople from './Functions/getRandomPeople';

const Global = (): JSX.Element => {
    const [randomPeople, setRandomPeople] = useState<IRandomPerson[]>([]);

    useEffect(() => {
        const getAndSetRandomPeople = async () => {
            const people = await getRandomPeople();

            return setRandomPeople(people);
        }

        getAndSetRandomPeople();
    }, []);

    return (
        <SectionComponent header='Random People all around the World'>
            <HeaderMeta title='Global' />
            <div className='global-page-wrapper column-with-padding'>
                <RenderSearchResults searchResult={randomPeople} />
            </div>
        </SectionComponent>
    )
};

export default Global;