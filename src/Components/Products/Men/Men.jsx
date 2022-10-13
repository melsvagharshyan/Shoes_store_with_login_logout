import React, {useEffect} from 'react';
import styles from './Men.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getMenData} from "../../../Redux/Reducers/ProductsReducer";
import Product from "../Product/Product";


const Men = () => {
    const dispatch = useDispatch();
    const {menData} = useSelector(state => state.Products);

    useEffect(() => {
        dispatch(getMenData());
    }, [])


    return (
        <div className={styles.Men}>
            {
                menData?.map((product) => {
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

export default Men;
