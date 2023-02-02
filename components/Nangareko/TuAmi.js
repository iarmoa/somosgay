import React from "react";
import TuAmiFeatures from "./TuAmiFeatures";

const img1 = "/images/portfolio/grid/ami.jpg";
const TuAmi =  () => {
    return (
        <section className="white-bg" >
            <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
                <div
                    className="bg-flex-holder bg-flex-cover"
                    style={{ backgroundImage: `url(${img1})` }}
                ></div>
            </div>
            <div className="container">
                <div className="col-md-5 col-sm-7">
                    <h2>Ami</h2>
                    <p className="mt-20">
                        AMI es una iniciativa comunitaria y no tiene costo, solo es necesario registrarse para acceder a los servicios que posee la plataforma
                    </p>

                    <TuAmiFeatures />
                    <a href="https://www.tuami.org/" target="_blank" rel="noopener noreferrer" className="btn btn-color">
                        Ami.org
                    </a>
                </div>
            </div>
        </section>
    );
}

export default TuAmi;