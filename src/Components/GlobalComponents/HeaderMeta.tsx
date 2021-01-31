import React from 'react';
import { Helmet } from "react-helmet-async";

interface Meta {
    title: string;
}

const HeaderMeta = ({ title }: Meta): JSX.Element => (
    <Helmet>
        <title>TheBooker | {title}</title>
    </Helmet>
);

export default HeaderMeta;