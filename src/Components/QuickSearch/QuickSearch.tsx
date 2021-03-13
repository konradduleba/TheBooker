import React from 'react';
import { useForm } from "react-hook-form";
import IQuickSearch from './Types/IQuickSearch';
import './Styles/QuickSearch.scss';
import { useHistory } from 'react-router';
import { search } from '../../Utils/routes.json';
import ESearchTypes from '../SearchPage/Enums/ESearchTypes';

const QuickSearchComponent = (): JSX.Element => {
    const { register, handleSubmit } = useForm<IQuickSearch>();
    const history = useHistory();

    const onSubmit = ({ value }: IQuickSearch) => history.push(`/app${search.href}/${ESearchTypes.USER}/${value}`);

    return (
        <section className='quick-search-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-container'>
                    <input
                        name="value"
                        type="text"
                        ref={register({
                            required: true,
                            maxLength: 40,
                            pattern: /^[A-Za-z]{2,40}/i
                        }
                        )}
                        className='field-input'
                    />
                </div>
                <div className='button-container'>
                    <p>quick search</p>
                    <input type="submit" value="go" />
                </div>
            </form>
        </section>
    )
}

export default QuickSearchComponent;