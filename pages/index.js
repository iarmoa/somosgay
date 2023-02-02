import React from "react";
import HomeSlider from "../components/Sliders/HomeSlider";
import HeadMeta from "../components/Header/HeadMeta";
import data from "../data/home-page-data.json";
import Services from "../components/HomePage/Services";
import Centers from "../components/HomePage/Centers";
import ContactUs from "../components/HomePage/ContactUs";

export default function Home() {

  return (
    <>
      <HeadMeta
          title = "Inicio - SOMOSGAY"
          description= "SOMOSGAY trabaja por una sociedad paraguaya orgullosa de sus raíces ancestrales, en la que todas las personas LGTBI+ sean respetadas y felices en sus hogares, escuelas, ciudades y lugares de trabajo"
          url=""
      />
      <HomeSlider data={data} />
      <Services 
        title="Mba'éichapa"
        tagline="Hola, ¿cómo estas?"
        verticalWord="Tekoporã."
        horizontalWord="Libres"
      >
        SOMOSGAY trabaja por una sociedad paraguaya orgullosa de sus raíces ancestrales, 
        en la que todas las personas LGTBI+ sean respetadas y felices en sus hogares, escuelas, ciudades y 
        lugares de trabajo
      </Services>
      <Centers />
      <ContactUs 
        tagline="¿Queres unirte?"
        title="Habla con nosotres!."
        textButton="Contáctanos"
        textLink="!#"
      >
        Nuestro sueño es un mundo en el que la homofobia, el sexismo, la desigualdad y la violencia, sean parte de la historia.
        Te invitamos a unirte al sueño. ¡Cambiá la realidad!
      </ContactUs>
    </>
  )
}
