import React from 'react';
import { Link } from 'react-router-dom';
import IDisplayPost from '../Types/IDisplayPost';
import { people } from '../../../../Routes/Utils/routes.json';
import Answers from './Answers';
import SectionComponent from '../../Section/Section';

const DisplayPost = ({ post }: IDisplayPost): JSX.Element => (
    <div className='discussion'>
        {post.map(({ title, date, time, authorData, description, answers }) =>
            <div key={`${authorData.name}${authorData.id}`}>
                <SectionComponent header={title} style={{ width: "100%" }}>
                    <div className='post'>
                        <p>Posted at {time} {date}</p>
                        <p>
                            <Link to={`/app${people.href}/${authorData.id}`}>{authorData.name}</Link> writes {'"'}{description}{'"'}
                        </p>
                        <p>response</p>
                    </div>
                </SectionComponent>
                {answers.length ? <Answers answers={answers} /> : null}
            </div>
        )}
    </div >
);

export default DisplayPost;