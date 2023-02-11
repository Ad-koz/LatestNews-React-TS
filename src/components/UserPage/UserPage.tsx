import React from 'react';
import { authContext } from "../../helpers/authContext";
import {useContext} from 'react';
import {auth} from '../../helpers/firebaseConfig';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { getAuth, signOut } from "firebase/auth";

const UserPage = () => {
    const loggedIn = useContext(authContext)
  return (
    <>
    {loggedIn && auth.currentUser &&  <> {
        <Typography variant="h2" align="center"  sx={{fontSize: '2rem', my: '1rem', mx:'auto',  pb: '.5rem' , borderBottom: '1px solid #1976d2'}}> Your profile
        <Typography variant="h5" align="center"  sx={{fontSize: '1rem', my: '1rem', mx:'auto',  pb: '.5rem' }}> Your email: {auth.currentUser.email}
        <Button variant="outlined" sx={{display:"block", mx: "auto", my: "1rem", }}
        onClick={() => signOut(auth)}>Log out</Button>
        </Typography>
        </Typography>
        
    }</>}
    </>
  )
}

export default UserPage

// 1. Stwórz komponent UserPage.
// 2. Komponent UserPage wyświetlaj jako Rooute w App.tsx ("/user").
// 3. W komponencie UserPage zaimportuj obiekt authContext oraz hooka useContext. Przy pomocy hooka ściągnij do zmiennej loggedIn wartość contextu.
// 4. W UserPage wyświetlaj ReactFragment (<></>) od razu w środku odpal renderowanie warunkowe. Cała zawartość komponentu będzie się wyświetlała tylko jeżeli loggedIn jest równe true i auth.currentUser istnieje (auth z firebaseConfig.ts).
// 5. Zawartość komponentu:
// - Typography (MUI) variant h2, align center, sx: fontSize 2rem, my 1rem, borderBottom 1 px solid #1976D2, pb .5rem. Text: Your profile
// - Typography variant h5, align center, sx: fontSize 1rem, my 1rem, mx auto. Text: Your email *email użytkownika*. Email użytkownika jest dostępny na obiekcie auth (zaimportuj go z firebaseConfig), auth.currentUser.email
// - Button (MUI) variant outlined, sx: display block, mx auto, my 1rem. Text: Log out.
// Na buttona nadaj onClick, w którym będziesz wywoływać funkcję signOut (firebase/auth). Sama funkcja signOut przyjmuje tylko 1 argument: obiekt auth (firebaseConfig.ts). Pamiętaj o anonimowej funkcji obwijącej w onClicku