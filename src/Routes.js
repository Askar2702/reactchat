import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./Utils/Consts";

export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Login

    }
]

export const PrivateRoutes = [
    {
        path: CHAT_ROUTE,
        Element: Chat

    }
]