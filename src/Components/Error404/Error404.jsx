import React from 'react';
import styles from './Error.module.scss';
import {Link} from "react-router-dom";


const Error404 = () => {
    return (
        <div className={styles.Error404}>
             <img src={"../../../Images/error404.png"} alt={"error404"}/>
             <Link to={"/login"}><button>Go Home</button></Link>
        </div>
    );
};

export default Error404;