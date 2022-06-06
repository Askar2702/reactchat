import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../Routes";
import Chat from "./Chat";
import Login from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Routes>
      {PrivateRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} exact={true} />
      ))}
      <Route path="*" element={<Chat />} />
    </Routes>
  ) : (
    <Routes>
      {PublicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} exact={true} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
