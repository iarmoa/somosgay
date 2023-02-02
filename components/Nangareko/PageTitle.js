import React from "react";

const PageTitle = ({ title }) => (
  <section
    className="title-hero-bg nangareko-cover-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="container">
      <div className="page-title text-center white-color">
        <h1>{title}</h1>
      </div>
    </div>
  </section>
);

export default PageTitle;
