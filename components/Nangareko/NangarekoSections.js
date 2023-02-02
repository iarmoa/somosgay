import React, { useState } from 'react';
import NangarekoSectionsFeatures from './NangarekoSectionsFeature';
import Image from "next/image";

export default function NangarekoSections( { aboutData } ){
    const [information, setInformation] = useState(aboutData[0]);

    return (
        <section>
            <div className="row mb-40">
                <div className="col-md-7 col-sm-12 col-xs-12 pb-40">
                    <div className="col-md-11 col-xs-12 flex-row d-flex align-items-center">
                        {aboutData.map((feature, i) => {
                            return (
                                <NangarekoSectionsFeatures
                                    key={i}
                                    active={information.id === feature.id}
                                    changeInformation={setInformation}
                                    feature={feature}
                                    delay={i}
                                    removePadding="true"
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 nangareko-info mb-50">
                    <div className="nangareko-info">
                        <Image alt={information.name} src={`${process.env.NEXT_PUBLIC_NEWS_IMAGES}/nangareko/${information.logo}`} width={300} height={500} />
                    </div>
                    <h2>{information.name}</h2>
                    <div className="nangareko-text pl-20 pr-20 mb-40" dangerouslySetInnerHTML = { { __html: information.text} } />
                    <a
                        href="!#"
                        onClick={(e) => {e.preventDefault(); window.open(process.env.NEXT_PUBLIC_NANGAREKO_ENDPOINT + information.url) }}
                        className="btn btn-color btn-square"
                    >
                        <span>
                            Se parte de {information.name}
                        </span>
                    </a>
                </div>
                <div className="col-md-offset-1 float-md-right"></div>
            </div>
        </section>
    )

}