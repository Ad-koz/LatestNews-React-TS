import React from 'react';
import {useState, useEffect} from 'react'
import SearchForm from '../SearchForm/SearchForm';
import Article from '../Article/Article';
import { List } from '@mui/material';
import axios from "axios";
import {API_KEY} from "../../helpers/api"

const SearchPage = () => {
    const [keyword, setKeyword] = useState("");
    const [articles, setArticles] = useState([]);

    //USEEFFECT
useEffect(() => {
    if (keyword !== "") {
        axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2023-02-01&language=en&sortBy=popularity&apiKey=${API_KEY}`)
        .then((data) => {
            setArticles(data.data.articles);
        })
        .catch((err) => {
            console.error(err.message);
        });
    }
}, [keyword])
  return (
    <>
    <SearchForm setKeyword = {setKeyword}/>
    {/* LIST */}
    <List sx={{ width: "100%", alignContent: "center"}}>
    {articles.length !== 0 &&
    articles.map((el, i) => {
      return <Article article = {el} key={i} />;
    })}
    </List>
    </>
  )
}

export default SearchPage