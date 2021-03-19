import React from 'react';
import { Link } from 'react-router-dom';
import IAnswersContent from '../Types/IAnswersContent';
import { people } from '../../../../Utils/routes.json';

const Answers = ({ answers }: IAnswersContent): JSX.Element => (
    <div className='answers-container'>
        {answers.map(({ authorData, date, time, message }) => <div className='single-answer' key={`${authorData.name}${authorData.id}`}>
            <p>
                <Link to={`/app${people.href}/${authorData.id}`}>{authorData.name}</Link> wrote at {time} {date}:
            </p>
            <p>{message}</p>
        </div>)}
    </div>
);

export default Answers;