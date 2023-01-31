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
  const [articles, setArticles] = useState<ArticleObj[] | []>([]) //tworzymy useState, żeby przechowywac te artykuly zeby za kazdym razem renderować listę artykułów, taka przechowalnia na listę artykułowj
  //1. useEffect to hook który służy do podpinania się pod konkretny moment cyklu zycia komponentu.
  //2. Cykl zycia komponentu:
  //a.) zamontowanie (wyświetlenie)
  //b) zmiana jakiejś wartości - coś w komponencie się zmienia, np. przychodzi jakiś nowy props lub aktualizuje się stan
  //c) odmontowanie (komponent znika z ekranu)
  //3. useEffect przyjmuje dwa argumenty
  //a) funckja wykonująca się w zadeklarowanym cyklu życioa komponentub) 
  //b)lista dependencji (argument opcjonalny)
  //jeżeli będzie brak listy dependencji = UE będzie strzelało cały czas jak zwykła funkcja
  // jeżeli lista dependecji będzie pusta = UE będzie strzelało tylko przy pierwszym zamontowaniu
  //jeżeli lista dependecji bedzie uzupełniona = UE będzie strzelało kiedy zmieni się wartość któregoś z elementów listy dependencji

  useEffect(() => {
    //fetch('xyz.com', {method: 'POST'})
    const today = new Date();
    const year = today.getFullYear() //2023
    const month = today.getMonth() + 1; //1
    const day = today.getDate(); //getDay ściąga dzień tygodnia, dlatego bierzemy getDate
    
    //W parametrze from ustaw datę tak, aby miesiąc i dzień miały przed sobą dopisane 0, jeżeli są mniejsze od 10
    //może nie działać przez strefy czasowe

    axios.get(
      `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${year
    }-${month < 10 ? `0${month}` : month
    }-${day < 10 ? `0${day}` : day}&apiKey=${API_KEY}`
    )
    .then((data) => {
      
    setArticles(data.data.articles)})
  }, []);
  //const [clicked, setClicked] = useState(false);

//   const names = [
//     { firstName: "John",
//     lastName: "Smith",
//   },
//   { firstName: "Anna",
//   lastName: "Smith",
// }];


  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: ".8rem" }}
      >
        Today's hottest news
      </Typography>
      {/*RENDEROWANIE WARUNKOWE TYP I, CONDITIONAL RENDERING*/ }
      {articles.length !== 0 && <Article article={articles[0]} />}
      {/* <button onClick={() => setClicked(!clicked)}>Click</button>
      {clicked && <h1>TO POCHODZI Z RENDEROWANIA WARUNKOWEGO</h1>} */}

      {/* RENDEROWANIE W PĘTLI */}
      {/* {names.map(el => {
  return <h2>{el.firstName} {el.lastName}</h2>})} */}
  {articles.length !== 0 &&
    articles.map((el, i) => {
      return <Article article = {el} key={i} />;
    })}
    </>
  );
}


export default HomePage