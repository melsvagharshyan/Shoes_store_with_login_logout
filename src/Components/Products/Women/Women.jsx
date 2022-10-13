import React, {useEffect} from 'react';
import styles from './Women.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getWomenData} from "../../../Redux/Reducers/ProductsReducer";
import Product from "../Product/Product";


const Women = () => {
    const dispatch = useDispatch();
    const {womenData} = useSelector(state => state.Products);

    useEffect(() => {
        dispatch(getWomenData());
    }, [])


    return (
        <div className={styles.Women}>
            {
                womenData?.map((product) => {
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

export default Women;