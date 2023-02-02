import React from "react";

const img1 = "images/portfolio/grid/gay_latino_1.jpg";

export default function GayLatino(){
    return (
        <section className="white-bg">
            <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
                <div
                    className="bg-flex-holder bg-flex-cover"
                    style={{ backgroundImage: `url(${img1})` }}
                ></div>
            </div>
            <div className="container">
                <div className="col-md-5 col-sm-7">
                    <h3>Gay Latino</h3>
                    <p className="mt-20">
                        GayLatino es una red creada en el 2015 y conformada por más de 60 activistas gay de Argentina, Belice, Bolivia, Brasil, Chile, Colombia, Costa Rica, 
                        Cuba, Ecuador, El Salvador, Estados Unidos de América, Guatemala, Honduras, Mexico, Nicaragua, Panamá, Paraguay, Perú, Puerto Rico, República Dominicana, 
                        Uruguay y Venezuela, entre otros países del mundo.
                        <br/>
                        Como miembros fundadores de GayLatino buscamos incidir de manera internacional por la salud, el bienestar y los derechos humanos de los hombres gays, 
                        bisexuales y hombres que tenemos sexo con otros hombres de América Latina y el mundo. Por medio de la unión regional podremos defender las conquistas 
                        logradas en varios países de la región a través de luchas y poder así seguir avanzando en el continente americano y el mundo.
                    </p>

                    <a href="https://www.redgaylatino.org/" target="_blank" rel="noopener noreferrer" className="btn btn-color">
                        Red Gay Latino
                    </a>
                </div>
            </div>
        </section>
    );
}
