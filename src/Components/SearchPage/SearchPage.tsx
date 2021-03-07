import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import './Styles/SearchPage.scss';
import ISearchForm from './Types/ISearchForm';
import testFriendList from '../Global/FriendList/testFriendList';
import IRandomPerson from '../Global/FriendList/Types/IRandomPerson';
import ShowRequestResult from './Components/ShowRequestResult';

const validationSchema = yup.object().shape({
    sentence: yup.string().required("This place can not be empty.")
        .min(2, "Search input have to contain minimum 2 characters")
        .max(40, "Search input have to contain maximum 40 characters")
        .matches(/^[A-Za-z]{2,40}/i, "Search input can not contain numbers")
});

const SearchPage = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISearchForm>({ resolver: yupResolver(validationSchema) });
    const { sentence } = useParams<ISearchForm>();
    const [isFormSended, setFormSended] = useState<boolean>(false);
    const [searchResult, setSearchResult] = useState<IRandomPerson[]>([]);
    const sendSearchRef = useRef<HTMLInputElement>(null);

    const onSubmit = (data: ISearchForm) => {
        setFormSended(true);
        console.log(data);
        setSearchResult(testFriendList);
    }

    const clickSearch = () => sendSearchRef.current?.click();

    useEffect(() => { sentence && clickSearch() }, [sentence]);

    const sectionHeader = 'Search';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='search-page-wrapper column-with-padding'>
                <form onSubmit={handleSubmit(onSubmit)} className={!isFormSended ? `space-between-components` : ''}>
                    <div className='search-container'>
                        <input
                            name="sentence"
                            ref={register}
                            defaultValue={sentence ? sentence : ''}
                            className='field-input'
                        />
                        <input type="submit" value="Search" className='search-input' ref={sendSearchRef} />
                    </div>
                    {errors.sentence && <p className='error'>{errors.sentence.message}</p>}
                </form>
                {isFormSended && <ShowRequestResult searchResult={searchResult} />}
            </div>
        </SectionComponent>
    )
}

export default SearchPage;
