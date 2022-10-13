import styles from './Loading.module.scss';


const Loading = () => {
    return (
        <div className={styles.Loading}>
           <img src={"../../../Images/Loading/Loading.gif"} alt={"Spinner"}/>
        </div>
    );
};



export default Loading;