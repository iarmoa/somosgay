import React from "react";
import Link from "next/link";
import NewsImage from "./NewsImage";

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


const NewsItem = ({
  news,
  hideExcerpt
}) => {
  const { images, title, titleId , publicationDate, excerpt, category, migratedId, id} = news;
  const url = `${'/news/' + titleId}`;
  const getImage = (path, migratedId) => {
      const urlImage = `${migratedId}/${path}`;
      return process.env.NEXT_PUBLIC_NEWS_IMAGES + urlImage;
  }

  return (
    <div
      className={"post mt-50"}
    >
      <div className="post-img">
          { images && <NewsImage
            className="img-responsive"
            src={getImage(images[0], migratedId || id)}
            alt=""
            fallbackSrc={filler}
            width={840}
            height={520}            
            layout="responsive"
          /> }
      </div>
      <div className="post-info">
        <span>{category}</span>
        <h4>
          <Link href={url}><a>{title}</a></Link>
        </h4>
        <h6>{parseDate(publicationDate)}</h6>
        <p>{ !hideExcerpt && excerpt}</p>
        <Link href={url}>
          <a className="readmore dark-color"><span>Ver más</span></a>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
