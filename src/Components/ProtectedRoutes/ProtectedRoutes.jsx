import React from 'react';
import { Outlet} from "react-router";
import SignIn from "../SignIn/SignIn";
import useAuth from "../../Hooks/useAuth";




const ProtectedRoutes = () => {
    const {isAuth} = useAuth();

    return isAuth ? <Outlet/> : <SignIn/>
};

export default ProtectedRoutes;