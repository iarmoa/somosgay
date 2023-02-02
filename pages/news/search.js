import React from 'react';
import NewsItemPaginable from '../../components/News/NewsItemPaginable';
import Searcher from '../../components/Elements/News/Searcher';
import PageTitle from '../../components/News/PageTitle';
import Link from "next/link";
import axios from 'axios';

export const  getServerSideProps = async (context) => {
    
    const page = context.query && context.query.page? context.query.page : 0;
    const query = context.query && context.query.search ? encodeURI(context.query.search) : 'LGTB';
    const url = process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/news/search';
    const pageParam = '?page=' + page;
    const category = '&query=' + query;

    const news = await axios.get(url + pageParam + category, { port: process.env.NEXT_PUBLIC_TAU_ENDPOINT_PORT });
    
    return {
        props: {
            news:  news.status == 200? news.data : [],
            query: query
        }
    }
}

export default function Pages({ news, query }) {
    const urlPage = process.env.NEXT_PUBLIC_PUBLIC_URL + 'news/pages';
    
    return (
        <>
            <PageTitle title="Noticias" />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link href={ '/news' }> 
                                <a className="mb-40"><i className="icofont-arrow-left"></i> Volver</a>
                            </Link>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-md-10 searcher-wrapper">       
                            <Searcher clue={decodeURI(query)} />
                        </div>
                    </div>
                    <h3>Resultados para: {decodeURI(query)}</h3>
                    {news.map((n, index) => ( 
                        <NewsItemPaginable key={index} news={n} /> 
                    ))}
                </div>
            </section>
        </>
    )
}