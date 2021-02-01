import React, { CSSProperties, ReactNode } from 'react';

interface Section {
    id?: string;
    children: ReactNode;
    header: string;
    style?: CSSProperties;
    className?: string;
}

const SectionComponent = ({ children, header, style, id, className }: Section): JSX.Element => (
    <section className={`section-component ${className}`} style={style} id={id}>
        <p className='section-header'>{header}</p>
        {children}
    </section>
)

export default SectionComponent;