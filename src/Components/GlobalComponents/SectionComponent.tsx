import React from 'react';
import ISectionComponent from '../../Types/ISectionComponent';

const SectionComponent = ({ children, header, style, id, className }: ISectionComponent): JSX.Element => (
    <section className={`section-component ${className}`} style={style} id={id}>
        <p className='section-header'>{header}</p>
        {children}
    </section>
)

export default SectionComponent;