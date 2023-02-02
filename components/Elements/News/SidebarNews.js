import React from "react";
import NewsItem from "./NewsItem";

const SidebarNews = ({ news, readMore, title }) => {
  const lastEnterviews = news.slice(0, 3);
  return  (
    <>
      <h4>{title}</h4>
      {lastEnterviews.map((n, index) => (
            <NewsItem
                key = {index}
                news={n}
                readMore={readMore}
                hideExcerpt={true}
            />
      ))}    
    </>
  )
};

export default SidebarNews;
