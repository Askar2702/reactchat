import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Context } from "..";
import "../Style/Login.css";

const Login = () => {
  const { auth } = useContext(Context);
  const loginAuth = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid className="loginContainer">
        <Grid className="loginLabel">
          <Box p={5}>
            <Button onClick={loginAuth} color="inherit" variant="outlined">
              Login with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
