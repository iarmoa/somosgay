import React from 'react';
import Icon from '../Elements/Icon';
import aboutData from "../../data/features-ami.json"


const TuAmiFeatures = () => {
    
    return (<div className="row mt-50">
        { aboutData.map((service, i) => {
            return (<div key={i} className="col-md-12 feature-box text-left mb-50 col-sm-12">
                <div className="pull-left">
                    <Icon icon={service.icon} className="font-50px default-icon" />
                </div>
                <div className="pull-right">
                    <h5 className="mt-0 upper-case">{service.title}</h5>
                    <p>{service.text}</p>
                </div>
            </div>)
        })}
    </div>)
}

export default TuAmiFeatures;