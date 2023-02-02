import React from 'react';
import PageTitle from '../../components/News/PageTitle';
import NewsContent from '../../components/News/NewsContent';
import HeadMeta from '../../components/Header/HeadMeta';
import axios from 'axios';

export async function getServerSideProps( { params }){
    const response = await axios.get(process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/news/view/' + params.id, { port: process.env.NEXT_PUBLIC_TAU_ENDPOINT_PORT });
    const news =  response.status === 200 && response.data? response.data : null;

    const sideResponse = await axios.get(process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/news/');
    const lastNews = sideResponse.status === 200? sideResponse.data.news : [];

    if(!news || !news.id)
        return {
            notFound: true
        }

    return {
        props: {
            news,
            lastNews
        }
    }
}

export default function News({ news, lastNews }){

    return (
        <>
            <HeadMeta
                title = { news.title }
                description= { news.excerpt }
                url= { 'news/' + news.titleId}
                alternative= { news.title }
                image={news.images && news.images.length > 0? news.id + '/' + news.images[0] : null }
            />
            <PageTitle title="Noticias" />
            <NewsContent news={news} lastNews={lastNews} />
        </>
    )
}