import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { LOGIN_ROUTE } from "../Utils/Consts";
import "../Style/Navbar.css";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  return (
    <div className="navbar" position="static">
      <Toolbar>
        <Grid container justifyContent={"flex-end"}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AskarChat{")))"}
          </Typography>
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              variant="outlined"
              color="inherit"
            >
              Exit
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate(LOGIN_ROUTE, { replace: true })}
            >
              Login
            </Button>
          )}
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Navbar;
