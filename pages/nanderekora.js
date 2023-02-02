import React from 'react';
import PageTitle from '../components/Nangareko/PageTitle';
import Heading from '../components/Nangareko/Heading';
import Icon from '../components/Elements/Icon';
import NangarekoSections from '../components/Nangareko/NangarekoSections';
import TuAmi from '../components/Nangareko/TuAmi';
import HeadMeta from '../components/Header/HeadMeta';
import axios from 'axios';

export async function getServerSideProps () {
    const response = await axios.get(process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/nangareko');
    const data = response.data;
    
    return {
        props: {
            data
        }
    }
}

export default function Nanderekora({ data }){
    return (
        <>
            <HeadMeta
                title = "Ñande Rekorã - SOMOSGAY"
                description= "El Sistema Ñande Rekorã busca reflejar en esta creación un intento colectivo de explorar nuestras raíces, nutrirlas y fortalecerlas. Elegimos construir una nueva etapa de vida institucional volcades a transmitir nuestros ideales, recuperando las voces ancestrales que ya dejamos de cantar."
                url="nanderekora"
            />
            <PageTitle
                title="Sistema Comunitario de Cuidado"
                tagline=""
            />
            <Heading title="Ñande Rekorã">
                <h5>¿Por qué Ñande Rekor&atilde;?</h5>
                <p>
                    <i>&laquo;Entendemos por Ñande Reko el significado que le daba Montoya en su Tesoro de la lengua guaran&iacute; (1639): Modo de ser, modo de estar, sistema, ley, cultura, norma, comportamiento, hábito, condición, costumbre. En esta concepción se encuentra la quintaesencia de su comprensión de la Calidad de Vida&raquo; (Meliá, 2002)</i>
                </p>
                <p>
                    Los programas de &quot;Ñande Rekor&atilde;&quot; surgen como respuesta a las m&uacute;ltiples crisis enfrentadas en nuestro actual panorama. Inspirados en la sabiduría de nuestra cultura, los programas buscan la existencia de espacios que permitan poner en práctica los conceptos contenidos en el &quot;reko&quot; desde el sentir-pensar &quot;guaraní&quot;
                </p><br/>
                <p>
                    Pod&eacute;s hacer click en los íconos para conocer más de cada una de sus partes o descargar el documento para más detalles.
                </p><br />
                <div className="col-md-12 mt-30 mb-20">
                        <p>Idiomas disponibles.</p>
                        <a
                            href="!#"
                            onClick={(e) => {e.preventDefault(); if(typeof window !== 'undefined') window.open('https://www.somosgay.org/somos_images/uploaded_images/nanderekora.pdf') }}
                            className="btn btn-color btn-square btn-animate  mr-10"
                        >
                            <span>
                            ESP
                            <Icon icon="simple-right" />
                            </span>
                        </a>
                        <a
                            href="!#"
                            onClick={(e) => {e.preventDefault(); if(typeof window !== 'undefined') window.open('https://www.somosgay.org/somos_images/uploaded_images/nanderekora_en.pdf') }}
                            className="btn btn-color btn-square btn-animate  mr-10"
                        >
                            <span>
                            ENG
                            <Icon icon="simple-right" />
                            </span>
                        </a>
                </div>
            </Heading>
            <NangarekoSections aboutData={ data } />        
            <TuAmi/>
        </>
    )
}