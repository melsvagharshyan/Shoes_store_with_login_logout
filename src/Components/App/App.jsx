import styles from './App.module.scss';
import Header from "../Header/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import React from "react";
import Footer from "../Footer/Footer";
import SinglePage from "../Products/SinglePage/SinglePage";
import {Suspense} from "react";
import Loading from "../Loading/Loading";
import Error404 from "../Error404/Error404";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
const SignIn = React.lazy(()=> import("../SignIn/SignIn"));
const SignUp = React.lazy(()=> import("../SignUp/SignUp"));
const Women = React.lazy(() => import("../Products/Women/Women"));
const Men = React.lazy(() => import("../Products/Men/Men"));
const Jewelery = React.lazy(() => import("../Products/Jewelery/Jewelery"));


function App() {
    const navigate = useNavigate();
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.Main}>
                <img className={styles.home} src={"../../../Images/home.png"} alt={"home"}
                     onClick={() => navigate(-1)}/>
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path={"/signup"} element={<SignUp/>}/>
                        <Route path={"/signin"} element={<SignIn/>}/>
                        <Route path={"*"} element={<Error404/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path={"/"} element={<SignIn/>}/>
                            <Route path={"/women"} element={<Women/>}/>
                            <Route path={"/women/:id"} element={<SinglePage/>}/>
                            <Route path={"/men"} element={<Men/>}/>
                            <Route path={"/men/:id"} element={<SinglePage/>}/>
                            <Route path={"/jewelery"} element={<Jewelery/>}/>
                            <Route path={"/jewelery/:id"} element={<SinglePage/>}/>
                        </Route>
                    </Routes>
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
}

export default App;



