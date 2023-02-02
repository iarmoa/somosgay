import React from 'react';
import PageTitle from '../../components/News/PageTitle'
import IndexContent from '../../components/News/IndexContent';
import axios from 'axios';
import HeadMeta from '../../components/Header/HeadMeta';

export const getServerSideProps = async () => {
    
    const url = process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/news/';
    const page = '?page=0';
    const category = '&category=';

    const news = await axios.get(url + page + category + 'Noticias', { port: process.env.NEXT_PUBLIC_TAU_ENDPOINT_PORT });
    const interviews = await axios.get(url + page + category + 'Entrevistas', { port: process.env.NEXT_PUBLIC_TAU_ENDPOINT_PORT });
    
    return {
        props: {
            news:  news.status == 200? news.data : [],
            interviews: interviews.status === 200? interviews.data : []
        }
    }
}

export default function News({news, interviews}){
    const newsList = news && news.news ? news.news : [];
    const interviewsList = interviews && interviews.news ? interviews.news : [];
    return (
        <>
            <HeadMeta
                title = "Noticias - SOMOSGAY"
                description= "Somos una organización nacida en Paraguay, uno de los países más homofóbicos y desiguales de Latinoamérica. Nuestro propósito es contribuir en la atención al VIH, innovar con estrategias efectivas contra la LGBTIfobia, y promover la defensa de los derechos humanos."
                url="news"
            />
            <PageTitle title="Noticias" />
            <IndexContent 
                lastNews={newsList.length > 0? newsList[0] : null}
                news={newsList}
                interviews={interviewsList}
            />
        </>
    )

}