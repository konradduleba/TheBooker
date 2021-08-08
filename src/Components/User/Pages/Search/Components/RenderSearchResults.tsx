import React from 'react';
import { Link } from 'react-router-dom';
import IRenderSearchResults from "../Types/IRenderSearchResults";
import { people, home } from '../../../../../Routes/Utils/routes.json';

const RenderSearchResults = ({ searchResult }: IRenderSearchResults): JSX.Element => {

    const sendRequest = (username: string) => {
        console.log(username);
    }

    return (
        <div className='search-results'>
            {searchResult.map(({ id, name, lastname, picture, username }) => <div key={id} className='result-wrapper'>
                <div>
                    <img src={picture} alt={name} />
                    <p>{name} {lastname}</p>
                </div>
                <div>
                    <Link to={`/app${people.href}/${username}`}>
                        <button className='normal-button'>Profile</button>
                    </Link>
                    <button className='normal-button' onClick={() => sendRequest(username)}>Invite</button>
                </div>
            </div>)}
            <Link to={`/app${home.href}`}>
                <button className='normal-button home'>Home</button>
            </Link>
        </div>
    )
}

export default RenderSearchResults;