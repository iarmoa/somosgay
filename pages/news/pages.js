import React from 'react';
import NewsItemPaginable from '../../components/News/NewsItemPaginable';
import Pagination from '../../components/Elements/Pagination';
import PageTitle from '../../components/News/PageTitle';
import Link from "next/link";
import axios from 'axios';

export const  getServerSideProps = async (context) => {
    
    const page = context.query && context.query.page? context.query.page : 0;
    const url = process.env.NEXT_PUBLIC_TAU_ENDPOINT + '/news';
    const pageParam = '?page=' + page;
    const category = '&category=';

    const news = await axios.get(url + pageParam + category + 'Noticias', { port: process.env.NEXT_PUBLIC_TAU_ENDPOINT_PORT });
    
    return {
        props: {
            news:  news.status == 200? news.data : []
        }
    }
}

export default function Pages({ news }) {
    
    const allNews = news && news.news? news.news : [];
    const urlPage = process.env.NEXT_PUBLIC_PUBLIC_URL + 'news/pages?category=Noticias&page=';
    
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
                    {allNews.map((n, index) => ( 
                        <NewsItemPaginable key={index} news={n} /> 
                    ))}
                    
                    <Pagination
                        totalPages={news? news.totalPages : 0}
                        currentPage={news? news.currentPage : 0}
                        url={urlPage}
                    />
                </div>
            </section>
        </>
    )
}
