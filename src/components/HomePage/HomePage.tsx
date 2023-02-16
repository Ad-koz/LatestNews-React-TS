import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios';
import { API_KEY } from "../../helpers/api";
import Article from "../Article/Article";



export interface ArticleObj {
  title: string;
  url: string;
  urlToImage: string;
}

const HomePage = () => {
  const [articles, setArticles] = useState<ArticleObj[] | []>([]) 
  useEffect(() => {
   
    const today = new Date();
    const year = today.getFullYear() 
    const month = today.getMonth() + 1; 
    const day = today.getDate(); 
    
  

    axios.get(
      `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${year
    }-${month < 10 ? `0${month}` : month
    }-${day < 10 ? `0${day}` : day}&apiKey=${API_KEY}`
    )
    .then((data) => {
      
    setArticles(data.data.articles)})
  }, []);
 


  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "1.5rem", mt: ".8rem" }}
      >
        The world hottest news
      </Typography>
  
  {articles.length !== 0 &&
    articles.map((el, i) => {
      return <Article article = {el} key={i} />;
    })}
    </>
  );
}


export default HomePage