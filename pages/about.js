import React from 'react';
import PageTitle from '../components/About/PageTitle';
import WhoWeAre from '../components/About/WhoWeAre';
import History from '../components/About/History';
import Documents from '../components/About/Documents';
import GayLatino from '../components/About/GayLatino';
import HeadMeta from "../components/Header/HeadMeta";

export default function About(){

    return (
        <>
            <HeadMeta
                title = "About Us - SOMOSGAY"
                description= "Somos una organización nacida en Paraguay, uno de los países más homofóbicos y desiguales de Latinoamérica. Nuestro propósito es contribuir en la atención al VIH, innovar con estrategias efectivas contra la LGBTIfobia, y promover la defensa de los derechos humanos."
                url="about"
            />
           <PageTitle
            title="SOMOS"
            tagline="CAMINAMOS CON EL COMPROMISO DE ALCANZAR EL TEKOPORÃ GUARANI, UNA SOCIEDAD IGUALITARIA, SIN EXCLUSIONES Y EN ARMONÍA CON NUESTRO TERRITORIO."
            />
            <WhoWeAre />
            <History 
                title="Nosotres"
                tagline="Cómo nació la Revolución del Arcoiris "
            />
            <Documents />
            <GayLatino />
        </>
    )
}