import React from "react";


const serviceImg  = '/images/startup-bg-right.jpg';

const History = ({ title, tagline }) => (
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <h2 className="font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 default-color">{tagline}</h4>
        <p className="mt-20">
          SOMOSGAY se origina en 2005 y es formalizada el 23 de mayo de 2009 como una respuesta solidaria hacia 
          la violencia ejercida hacia las personas LGTBI+ en Paraguay, durante la inestable transición democrática 
          tras una de las más largas dictaduras militares de la región. 
        </p>
        <p>
          Nuestra organización marca su compromiso con la construcción de una sociedad libre de opresiones, 
          plenamente igualitaria, reivindicando nuestra herencia guaraní que aspira a lograr el tekoporã (buen vivir) 
          para todes.
        </p>
      </div>
    </div>
  </section>
);

export default History;
