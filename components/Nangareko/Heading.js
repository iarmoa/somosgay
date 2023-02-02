import React from 'react';
import HeadingSection from '../Header/HeadingSection';

const Heading = ( {title, children} ) => (
    <section className="first-ico-box pb-50 white-bg" id="about">
    <div className="container">
      <div className="row">
            <HeadingSection title={title} >
                {children}
            </HeadingSection>            
      </div>
    </div>
  </section>
);

export default Heading;