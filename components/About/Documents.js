import React from "react";
import documents from '../../data/documents.json';
import Icon from "../Elements/Icon";
import DocumentsPeriods from "./DocumentsPeriods";

const openDocument = (url) => {
    if(typeof window !== "undefined")
        window.open(url);
} 

// Para documentaciones que se exponen
const Documents = () => {
    return (    
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="font-700">Documentos públicos</h2>
                    </div>
                <div className="col-md-3">
                    <DocumentsPeriods />
                </div>
                <div className="col-md-9 terms">
                    <ul className="careers-listing">
                        {documents.map((document) => (
                            <li key={document.id}>
                                <div className="row">
                                    <div className="career-main col-md-6">
                                        <h5 className="font-700">{document.title}</h5>
                                        <span className="default-color career-type">
                                            Formato {document.type}
                                        </span>
                                        <span className="career-location">
                                            <Icon icon="google-map-circle" />
                                            {document.language}
                                        </span>
                                    </div>
                                    
                                    <div className="col-md-3 career-category">
                                        <span>{document.category}</span>
                                    </div>

                                    <div className="career-details col-md-3">
                                        <a
                                            href="!#"
                                            onClick={(e) => {e.preventDefault(); openDocument(document.url)}}
                                            className="btn btn-color btn-square btn-animate"
                                        >
                                            <span>
                                            Descargar
                                            <Icon icon="simple-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Documents;