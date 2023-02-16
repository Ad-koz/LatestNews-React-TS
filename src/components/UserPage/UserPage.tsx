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

