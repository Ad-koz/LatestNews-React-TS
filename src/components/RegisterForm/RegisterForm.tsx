import React from 'react';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";




export interface RegisterFormValues {
    email:string;
    password: string;
    password2:string;
}

const RegisterForm = () => {

    const {register, handleSubmit} = useForm<RegisterFormValues>()
 
const registerUser = (data: RegisterFormValues) =>  {
   
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

  }
  return (
    
    <form action="" style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(registerUser)}>
        <Typography align= "center" variant="h2" sx={{fontSize: "1.5rem"}}>
            Register new account
        </Typography>
  

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

