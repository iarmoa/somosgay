import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/centers-data.json";

export default function Centers(){
    const centerClass = 'centro-bg-right';
    const villetaClass = 'centro-villeta-bg-right';
    const [center, setCenter] = useState(centerClass);

    const changeImage = (id) => {
        setCenter(id === 1? centerClass:villetaClass);
    }

    return  (<section className="pt-0 pb-0">
        <div className="white-bg clearfix pt-100 pb-100 relative">
            <div className={`${center} bg-flex-right col-md-6`}></div>
            <div className="col-about-left col-md-5 col-md-offset-1 text-left">
            <h2 className="text-uppercase font-700">Tekoha Centros Comunitarios LGTBI+</h2>
            <Tabs className="light-tabs mt-50">
                <TabList className="nav nav-tabs text-left" role="tablist">
                {dataTabs
                    .filter((v, i) => i < 3)
                    .map((tab) => (
                    <Tab onClick={() => changeImage(tab.id)} key={tab.id}>
                        <span>{tab.title}</span>
                    </Tab>
                    ))}
                </TabList>
                <div className="tab-content text-justify">
                {dataTabs
                    .filter((v, i) => i < 3)
                    .map((tab) => (
                    <TabPanel key={tab.id} className="tab-pane fade in active">
                        <p>{tab.text}</p>
                    </TabPanel>
                    ))}
                </div>
            </Tabs>
            </div>
        </div>
    </section>)
};