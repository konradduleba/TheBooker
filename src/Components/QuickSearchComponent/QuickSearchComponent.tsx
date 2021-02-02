import React from 'react';
import { useForm } from "react-hook-form";
import './QuickSearchComponent.scss';

interface IQuickSearch {
    value: string;
}

const QuickSearchComponent = (): JSX.Element => {
    const { register, handleSubmit } = useForm<IQuickSearch>();

    const onSubmit = ({ value }: IQuickSearch) => console.log(value);

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