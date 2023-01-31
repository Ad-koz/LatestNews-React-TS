import React from "react";
import { Button, Typography, TextField } from "@mui/material";

const inputStyles = { display: "block", mx: "auto", my: ".5rem" };

const LoginPage = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <TextField placeholder="email" sx={inputStyles} />
      <TextField placeholder="password" sx={inputStyles} />
      <Button
        variant="contained"
        sx={{ display: "block", mb: "1rem", mx: "auto" }}
      >
        LOG IN
      </Button>
      <Typography variant="h6" sx={{ fontWeight: 100, textAlign: "center" }}>
        Don't have an account yet? Register now!
      </Typography>
      <Button variant="outlined" sx={{ display: "block", mx: "auto" }}>
        Register
      </Button>
    </form>
  );
};

export default LoginPage;