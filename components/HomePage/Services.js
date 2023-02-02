import React from 'react';
import Icon from '../Elements/Icon';
import { useLax } from "use-lax";
import aboutData from "../../data/abobut-home-data.json";
import Link from "next/link";
import HeadingSection from '../Header/HeadingSection';

export default function Services({ title, tagline, children, verticalWord, horizontalWord }){
    useLax();
    return (
      <section className="first-ico-box">
        <div className="dn-bg-lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="left_parallax">
          <div className="vertical-text">
            <h3
              data-lax-preset="driftRight"
              data-lax-optimize="true"
              style={{ color: "blue" }}
              className="lax chunkyLongText font-700 dark-color"
            >
              {verticalWord}
            </h3>
          </div>
        </div>
        <div className="right_parallax">
          <h3
            data-lax-preset="driftLeft"
            data-lax-optimize={true}
            className="lax chunkyText font-700 pink-color"
          >
            {horizontalWord}
          </h3>
        </div>
        <div className="container">
            <div className="row">
                <HeadingSection title={title} tagline={tagline}>
                    {children}
                </HeadingSection>
            </div>
          <div className="row mt-50">
            {aboutData.map((service, i) => {
              return (
                <div
                  key={service.id}
                  animation="fadeInUp"
                  delay={`0.${i + 1}s`}
                >
                  <div className="col-md-4 feature-box text-center radius-icon">
                    <Icon
                      icon={service.icon}
                      className="font-50px default-icon"
                    />
                    <h4 className="text-uppercase">{service.title}</h4>
                    <p>
                      {service.text}          
                        <Link
                          href={`${service.link}`}
                        >
                          <a><span>Ver más</span></a>
                        </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}