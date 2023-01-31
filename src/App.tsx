import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/" element={<RegisterForm/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// 1. Stwórz komponent Article, ten komponent będzie przyjmował 1 propsa: obiekt artykułu (nazwij go article) (jeden, pojedyńczy), do otypowania propsów i konkretnie propsa article użyj interfejsu ArticleObj
// 2. Komponent Article ma wyświetlać element ListItem (MUI)
// - w środku ListItem ma się wyświetlać element Card (MUI), ustaw mu propsy variant outlined, w sx'ach ustaw dolny margines na 10px
// - w środku Card wstaw anchor (tag <a>) ustaw mu href na article.url (własność obiektu atykułu z propsa), target na __blank w strybucie style ustaw textDecoration na none
// - w środku <a> wstaw tag <img>, ustaw mu src na article.urlToImage, alt na article.title, w atrybucie style ustaw mu szerokość na 100%
// - w środku <a>, pod img, wstaw ListItemText (MUI), w sx'ach ustaw color na black i mx na 5%. Text tego ListItemText to article.title

