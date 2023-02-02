import React from 'react';
import Head from "next/head";

const HeadMeta = ({ title, description, image, url, alternative }) => {
    const urlImage = image? process.env.NEXT_PUBLIC_NEWS_IMAGES + image : process.env.NEXT_PUBLIC_PUBLIC_URL + 'background/parallax-bg.jpg';
    const fullUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + url;
    const alternativeText = alternative? alternative : title; 
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={urlImage} />
            <meta property="og:url" content={fullUrl} />

            <meta property="og:site_name" content="SOMOSGAY" />
            <meta name="twitter:image:alt" content={alternativeText} />
        </Head>
    )
}

export default HeadMeta;