import React, {useState} from 'react';
import styles from './Header.module.scss';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../Redux/Reducers/UserReducer";
import useAuth from "../../Hooks/useAuth";


const Header = () => {
    const {isAuth} = useAuth();
    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.info}>
                    <NavLink to={'/men'}>Men</NavLink>
                    <NavLink to={'/women'}>Women</NavLink>
                    <NavLink to={'/jewelery'}>Jewelery</NavLink>
                </div>
                <div className={styles.accounts}>
                    <a href={'https://www.facebook.com/'} target={"_blank"}>
                        <img src={'../../Images/facebook.png'} alt={"meta"}/>
                    </a>
                    <a href={'https://www.google.com/'} target={"_blank"}>
                        <img src={'../../Images/google.png'} alt={"google"}/>
                    </a>
                    <a href={'https://www.twitter.com/'} target={"_blank"}>
                        <img src={'../../Images/twitter.png'} alt={"twitter"}/>
                    </a>
                    <div className={styles.search}>
                        <img src={'../../Images/search.png'} alt={"Search"}/>
                        <input type={"search"} placeholder={"Search..."}/>
                    </div>

                </div>
                <div className={styles.register} >
                    {isAuth?  <button onClick={()=> dispatch(deleteUser())}>Sign out</button> : <span></span>}
                </div>
            </div>
            <div className={styles.logoArea}>
                <h1 onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>Mels Style</h1>
                <img src={'../../../Images/buterfly.gif'} alt={"buterfly"} style={{opacity: state ? "1" : "0"}}/>
            </div>
        </div>
    );
};

export default Header;





