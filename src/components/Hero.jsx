import React, { useEffect, useState } from 'react';
import Card from './Card';

const Hero = ({category}) => {
  const [articles, setArticles] = useState([]); // Corrected useState

  useEffect(() => {
    const fetchNews = () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=df35afe4318044b0acabe1e956f50603`;


      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
            console.log("Fetched Data:", data); // Log the entire response data
            console.log("Fetched Articles:", data.articles); 
          setArticles(data.articles); 

        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
        
    };
     
    fetchNews();
  }, [category]);

  return (
    <div>
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl font-serif font-semibold text-black tracking-wide shadow-lg bg-white p-1 rounded-md">
          Latest
        </p>
        <p className="text-2xl font-serif font-semibold text-black tracking-wide shadow-lg bg-red-600 p-1 rounded-md">
          Newz
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-4 p-4">
        {articles.map((news, index) => (
          
          news.title!=="[Removed]" && news.description!=="[Removed]" ? (
            <Card key={index} title={news.title} description={news.description} src={news.urlToImage} />
          ) : null
        ))}
      </div>
     
      
    </div>
  );
};

export default Hero;
