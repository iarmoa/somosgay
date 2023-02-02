import React from "react";
import Link from "next/link";
import SidebarNews from "../Elements/News/SidebarNews";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
import Icon from "../Elements/Icon";
import NewsImage from "../Elements/News/NewsImage";

const filler = '/images/post/filler.jpg';

const NewsContent = ( { news, lastNews }) => {
    
    const url = news && news? `${process.env.NEXT_PUBLIC_PUBLIC_URL}news/`+news.titleId : null;
    const getImage = (images, migratedId) => {
        try{
          if(!images || images.length === 0)
            return filler;

          const path = images[0];
          const urlImage = `${migratedId}/${path}`;
          return process.env.NEXT_PUBLIC_NEWS_IMAGES + urlImage;
        }catch(error){
          return filler;
        }
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="post">
                        <div className="post-img img-responsive">
                        <NewsImage
                            src={getImage(news.images, news.migratedId || news.id)}
                            alt={news.title}
                            layout="responsive"
                            width={840}
                            height={520}
                            placeholder="blur"
                            fallbackSrc={filler}                        
                        />
                        </div>
                        <div className="post-info">
                            <span>{news.category}</span>
                            <h3>
                                {news.title}
                            </h3>
                            <h6>{news.publicationDate}</h6>
                            <div>
                                <FacebookShareButton className="mr-10" url={url} >
                                        <FacebookIcon  size={30} round={true}/>
                                </FacebookShareButton>
                                <TwitterShareButton className="mr-10" url={url} >
                                        <TwitterIcon  size={30} round={true}/>
                                </TwitterShareButton>
                                <TelegramShareButton className="mr-10" url={url} >
                                        <TelegramIcon  size={30} round={true}/>
                                </TelegramShareButton>
                                <WhatsappShareButton className="mr-10" url={url} >
                                        <WhatsappIcon  size={30} round={true}/>
                                </WhatsappShareButton>
                            </div>
                        </div>
                    </div>
                    <div className="blog-standard">                    
                        <p className="lead">{news.excerpt}</p>
                        <hr/>
                        <div dangerouslySetInnerHTML={{ __html: news.body }} />
                    </div>
                    <div className="post-controls">
                        <div className="post-share">
                            <Link href='/news'>
                                <a className="mb-40"><Icon className="icofont-arrow-left" /> Volver </a>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 right-col-rv">
                        <Link href='/news'>
                            <a className="mb-40"><Icon className="icofont-arrow-left" /> Volver </a>
                        </Link>
                        <SidebarNews title="Últimas noticias" news={lastNews} />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default NewsContent;