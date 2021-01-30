import React, { CSSProperties, ReactNode } from 'react';

interface Section {
    children: ReactNode;
    header: string;
    style?: CSSProperties;
}

const SectionComponent = ({ children, header, style }: Section): JSX.Element => (
    <section className='section-component' style={style}>
        <p className='section-header'>{header}</p>
        {children}
    </section>
)

export default SectionComponent;