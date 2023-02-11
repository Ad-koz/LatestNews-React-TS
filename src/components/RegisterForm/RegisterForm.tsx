import React from 'react';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";



// 1. Elementem obwijającym wszystkie inne będzie zwykły htmlowy <form>, w atrybucie style ustaw mu display na flex i flexDirection na column.
// wszystko poniżej to równorzędne dzieci forma z pkt 1
// 2. Typography (MUI) z propsami: align center, variant h2, w sx'ach fontSize na 1.5. Text: Register new account
// 3. TextField (MUI) z propsami: type email, placeholder email, w sx'ach: display block, mx auto, my .5rem
// 4. TextField (MUI) z propsami: type password, placeholder password, w sx'ach: display block, mx auto, my .5rem
// 5. TextField (MUI) z propsami: type password, placeholder repeat password, w sx'ach: display block, mx auto, my .5rem
// 6. Button (MUI) z propsami: variant contained, type submit, w sx'ach: display block, mx auto. Text: Register

//HOOK useForm
//1. Import useForm (u góry)
//4. Stworzenie interfasu do formularza. W tym interfejsie wypiszemy wszystkie wartosci pobierane z formularza
export interface RegisterFormValues {
    email:string;
    password: string;
    password2:string;
}

const RegisterForm = () => {
//2. Wywołanie useForm
    const {register, handleSubmit} = useForm<RegisterFormValues>()
    //5. Wyżej - przypisanie interfejsu do wywołania useForm i funkcji do onSubmit (patrz góra/dół)
//3. Stworzenie funckji onSubmit
//Pod parametr data będą wpadały wszystkie dane z formularza w formie obiektu
const registerUser = (data: RegisterFormValues) =>  {
    // if (data.password === data.password2) return;
    if (data.password === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          console.log("successfully created a user");
        })
        .catch((err) => console.error(err.message));
    } else {
      console.log("Password differ from each other");
    }

    console.log(data);
    // Sign up news users
  };
  return (
    //6. Wywołanie handleSubmit i przypisanie funkcji registerUser
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(registerUser)}>
        <Typography align= "center" variant="h2" sx={{fontSize: "1.5rem"}}>
            Register new account
        </Typography>
        {/* 7. Rejestracja inputów */}

        <TextField type="email" placeholder ="email" sx={{display:"block", mx: "auto", my: ".5rem"}} {...register("email", {required: true})}>
        </TextField>

        <TextField type="password" placeholder ="password" sx={{display:"block", mx: "auto", my: ".5rem"}}{...register("password", {required: true})}>
        </TextField>

        <TextField type="password" placeholder ="repeat password" sx={{display:"block", mx: "auto", my: ".5rem"}}{...register("password2", {required: true})}>
        </TextField>
        <Button variant = "contained" type = "submit" sx={{display:"block", mx: "auto"}} >
            Register
        </Button>
    </form>
  )
}

export default RegisterForm

