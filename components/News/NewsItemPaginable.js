import React from 'react';
import Link from "next/link";
import NewsImage from '../Elements/News/NewsImage';

const filler = '/images/post/filler.jpg';

const parseDate = (publicationDate) => {
    try{
      const d = new Date(publicationDate);
      let ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d);
      let mo = new Intl.DateTimeFormat('es', { month: 'short' }).format(d);
      let da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);
      return `${da} ${mo} ${ye}`;
    }catch(error){
      return publicationDate;
    }
}

const getImage = (path, migratedId) => {
    const urlImage = `${migratedId}/${path}`;
    return process.env.NEXT_PUBLIC_NEWS_IMAGES + urlImage;
}


const NewsItemPaginable = ({news}) => {

    const url = `${'/news/' + news.titleId}`;

    return (
        <div className="row mb-60">
            <div className="col-lg-3 mt-20">
                { news.images && <NewsImage
                    className="img-responsive"
                    src={news.images && news.images.length > 0? getImage(news.images[0], news.migratedId || news.id) : filler}
                    alt=""
                    width={840}
                    height={520}
                    placeholder="blur"
                    blurDataURL={filler}
                    layout='responsive'
                    fallbackSrc={filler}
                /> }
            </div>
            <div className="post col-lg-9">
                <div className="post-info">
                    <span>{news.category}</span>
                    <h4>
                        <Link href={url}>{news.title}</Link>
                    </h4>
                    <h6>{parseDate(news.publicationDate)}</h6>
                    <p>{news.excerpt}</p>
                    <Link href={url}>
                        <a className="readmore dark-color"><span>Ver más</span></a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsItemPaginable;