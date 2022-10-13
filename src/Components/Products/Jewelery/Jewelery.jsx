import React, {useEffect} from 'react';
import styles from './Jewelery.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getJeweleryData} from "../../../Redux/Reducers/ProductsReducer";
import Product from "../Product/Product";


const Jewelery = () => {
    const dispatch = useDispatch();
    const {jeweleryData} = useSelector(state => state.Products);

    useEffect(() => {
        dispatch(getJeweleryData());
    }, [])


    return (
        <div className={styles.Jewelery}>
            {
                jeweleryData?.map((product) => {
                    return <Product key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    category={product.category}
                                    rating={product.rating}/>
                })
            }
        </div>
    );
};

export default Jewelery;