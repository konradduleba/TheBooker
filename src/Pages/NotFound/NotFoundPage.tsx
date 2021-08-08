import React from 'react';
import dot from '../../Assets/dot.png';
import './Styles/NotFoundPage.scss';
import { Link } from 'react-router-dom';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../Components/Global/Section/Section';

const NotFoundPage = (): JSX.Element => (
    <SectionComponent header="Page is not found">
        <div className='page-not-found-wrapper column-with-padding'>
            <HeaderMeta title='404' />
            <h1 className='header'>[ 404 ]</h1>
            <SectionComponent header="What to do?" className="inside-window margin-between-sections">
                <div className='column-with-padding'>
                    <p>If page that you want to visit is not loading, you could try this:</p>
                    <ul>
                        <li><img src={dot} alt="dot" />Refresh page.</li>
                        <li><img src={dot} alt="dot" />Check your internet connection.</li>
                        <li><img src={dot} alt="dot" />Check if <span>{window.location.pathname}</span> is a proper path.</li>
                        <li><img src={dot} alt="dot" />We could be working on some functionalities. Try again later.</li>
                    </ul>
                </div>
            </SectionComponent>
            <Link to="/"><button className='normal-button'>Home</button></Link>
        </div>
    </SectionComponent>
)

export default NotFoundPage;