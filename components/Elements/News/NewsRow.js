import React from 'react';
import NewsItem from './NewsItem';

const NewsRow = ({newsList, readMore}) =>{
    const row = [];

    for(let index = 0; index < newsList.length; index+= 2){
        row.push(newsList.slice(index, index + 2));
    }
    
    return (
        <>
            {row.map((rw, k) => (
                <div className="row" key={k}>
                    {rw.map((news, index) => (
                        <div className="col-md-6" key={index}>
                            <NewsItem
                                news={news}
                                readMore={readMore}
                                hideExcerpt={true}
                            />
                        </div>
                    ))}    
                </div>
            ))}
        </>
    )

}

export default NewsRow;