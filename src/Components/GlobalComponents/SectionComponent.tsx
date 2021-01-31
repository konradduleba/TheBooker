import React, { CSSProperties, ReactNode } from 'react';

interface Section {
    id?: string;
    children: ReactNode;
    header: string;
    style?: CSSProperties;
}

const SectionComponent = ({ children, header, style, id }: Section): JSX.Element => (
    <section className='section-component' style={style} id={id}>
        <p className='section-header'>{header}</p>
        {children}
    </section>
)

export default SectionComponent;