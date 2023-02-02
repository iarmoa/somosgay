import React from "react";
import Icon from "../Elements/Icon";

const selectItem = (e, feature, changeInformation) => {
  e.preventDefault();
  changeInformation(feature);
}

const NangarekoSectionsFeatures = ({ feature, active, changeInformation }) => {
  return (
    <>
      <div key={feature.key} className="col-lg-4 col-md-4 col-sm-6 col-xs-6 feature-box text-center mb-30 mt-30">
        <a href="!#" onClick={(e) => { selectItem(e, feature, changeInformation) }}>
          <Icon
            icon={feature.icon}
            className={active? "font-40px dark-icon white-bg-icon-active circle-icon fade-icon mb-10" : "font-40px dark-icon white-bg-icon circle-icon fade-icon mb-10"}
          />
        </a>
        <h4 className="upper-case">{feature.name}</h4>
      </div>
    </>
  );
};

export default NangarekoSectionsFeatures;