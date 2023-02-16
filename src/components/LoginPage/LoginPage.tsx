import React from "react";
import { Button, Typography, TextField } from "@mui/material";
import {RegisterFormValues} from "../RegisterForm/RegisterForm";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { Link } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}
const inputStyles = { display: "block", mx: "auto", my: ".5rem" };

const LoginPage = () => {
  const {register, handleSubmit} = useForm<LoginFormValues>();

  const logUserIn = (data: LoginFormValues) => {
   signInWithEmailAndPassword(auth, data.email, data.password)
  .then(() => {
    console.log("successfully signed user in")
  })
  .catch((error) => {
  console.error(error.message)
  });
  }
  

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit = {handleSubmit(logUserIn)}>
      <TextField placeholder="email" sx={inputStyles} {...register('email', {required: true})} /> 



      <TextField placeholder="password" sx={inputStyles} {...register('password', {required: true})} />
      <Button
        variant="contained" type="submit"
        sx={{ display: "block", mb: "1rem", mx: "auto", fontSize: '1rem' }}
      >
        LOG IN
      </Button>
      <Typography variant="h6" sx={{ fontWeight: 100, textAlign: "center" }}>
        Don't have an account yet? Register now!
      </Typography>
      <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
        <Button variant="outlined" sx={{ display: "block", mx: "auto" }}>
          Register
        </Button>
      </Link>
    </form>
  );
};


export default LoginPage;

// 1. Zastosuj useForm w  LoginPage.tsx, ściągnij dane z inputów email i password. Pamiętaj o wszystkich niezbędnych krokach.