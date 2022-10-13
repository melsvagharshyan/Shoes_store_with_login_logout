import React from 'react';
import styles from './Product.module.scss';
import {NavLink} from "react-router-dom";


const Product = (props) => {
    const {image, title, price, description, category, rating, id} = props;
      let sex;
      if(category === "women's clothing"){
          sex = "women"
      } else if(category === "men's clothing"){
          sex = "men"
    } else if(category === "jewelery"){
          sex = "jewelery"
      }

    return (
        <div className={styles.Product}>
            <div className={styles.item}>
              <NavLink to={`/${sex}/${id}`}><img src={image !== null ? image : ""} alt={"product_image"}/></NavLink>
                <span> <img className={styles.star} src={'../../../../Images/star.png'} alt={"star"}/>{` ${rating.rate}`}</span>
                <span>{rating.count}</span>
                <span className={styles.price}>{`${price}$`}</span>
            </div>
            <div className={styles.description}>
                <span className={styles.category}>{category}</span>
                <span>{description}</span>
                <span>{title}</span>
                <button className={styles.buy}>Shop Now</button>
            </div>
        </div>
    );
};

export default Product;


