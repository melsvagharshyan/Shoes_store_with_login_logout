import React, {useEffect, useState} from 'react';
import styles from './SinglePage.module.scss';
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {singlePageThunk} from "../../../Redux/Reducers/SinglePageReducer";



const SinglePage = () => {
    const {id} = useParams();
    const {singlePage} = useSelector(state=> state.singlePage);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(singlePageThunk(id))
    }, [id]);

    return (
        <div className={styles.SinglePage}>
            {
                singlePage && (
                    <>
                        <div className={styles.item}>
                            <img src={singlePage.image !== null ? singlePage.image : ""} alt={"product_image"}/>
                            <span> <img className={styles.star} src={'../../../../Images/star.png'} alt={"star"}/>{` ${singlePage.rating.rate}`}</span>
                            <span className={styles.price}>{`${singlePage.price}$`}</span>
                        </div>
                        <div className={styles.description}>
                            <span className={styles.category}>{singlePage.category}</span>
                            <span>{singlePage.description}</span>
                            <span>{singlePage.title}</span>
                            <button className={styles.buy}>Shop Now</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default SinglePage;

