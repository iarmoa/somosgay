import React from 'react';
import NewsItem from './NewsItem';

const LastNews = ({news, readMore}) => {
    if(!news) return null;
    return (
        <NewsItem
            news={news}
            readMore={readMore}
        />
    )
}

export default LastNews;