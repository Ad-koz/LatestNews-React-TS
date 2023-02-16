import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/NavBar/NavBar";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import {useState} from 'react'
import {onAuthStateChanged} from "firebase/auth"
import {auth} from './helpers/firebaseConfig'
import {authContext} from './helpers/authContext'
import UserPage from './components/UserPage/UserPage'
import ProfilePhotoForm from './components/ProfilePhotoForm/ProfilePhotoForm';
import SearchPage from './components/SearchPage/SearchPage';

function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) { 
      setLoggedIn (true);
    } else { 
      setLoggedIn(false)
    }
  });

  return (
    <div className="App">
    
    <BrowserRouter>
    <authContext.Provider value={loggedIn}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/customer" element={<CustomerForm />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      </authContext.Provider>
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

//Zadanie. 11.02
//// 1. Stwórz komponent CustomerForm.tsx.
// 2. Stwórz stan customerInfo, wartość początkowa: { firstName: '', lastName: '', street: '', city: '', zipCode: '', phoneNumber: '', email: '' }
// 3. JSX: 
// - stwórz formularz który będzie zawierać inputy dla wszystich danych wymienionych wyżej, dodaj submit button z tekstem Submit
// 4. Obsłuż formularz przy pomocy useForm
// 5. Stwórz funkcję registerUserInfo, w tej funkcji wrzuć wszystkie uzyskane z formularza dane do stanu customerInfo
// 6. Wyświetl dane klienta w formie tabeli w JSX.
// First name | John
// Last name | Smith

//Zad
// 1. Na ikonie użytkownika w navbarze załóż Linka do route'a z komponentem LoginPage
// 2. W LoginPage.tsx istnieje przycisk Register, nałóż na niego Link do route'a z komponentem RegisterForm
