import React from 'react';
import Link from 'next/link';
import LastNews from '../Elements/News/LastNews';
import NewsRow from '../Elements/News/NewsRow';
import SidebarNews from '../Elements/News/SidebarNews';
import Searcher from '../Elements/News/Searcher';


export default function IndexContent({lastNews, news, interviews}){
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h4>
                            Noticias
                        </h4>
                        <LastNews news={lastNews} />
                        <NewsRow newsList={news.slice(1)} />
                        <Link href={ '/news/pages' }>
                            <a className="btn btn-color btn-sm btn-circle font-20px float-right mt-40"><i className="icofont-rounded-double-left"></i>Ver todas las noticias </a>
                        </Link>
                    </div>
                    <div className="col-md-3 right-col-rv">
                        <h4>¿Neceistas buscar algo?</h4>                        
                        <div className="mt-50 mb-50">
                            <Searcher hideIcon={true} />
                        </div>
                        <SidebarNews title={"Entrevistas"} news={interviews} />
                    </div>
                </div>
            </div>
        </section>
    )
}