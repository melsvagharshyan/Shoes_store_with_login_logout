import React, {useEffect} from 'react';
import styles from "./SignInForm.module.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const SignInForm = (props) => {
const {onLoginSubmit, error} = props;

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitSuccessful
        }
    } = useForm({mode: "onSubmit"});

    useEffect(()=> {
        reset();
    }, [isSubmitSuccessful]);

    return (
        <form className={styles.Login} onSubmit={handleSubmit(onLoginSubmit)}>
            <h1 className={styles.signInText}>Sign in</h1>
            <input className={styles.writeInput} type={"email"} placeholder={"Email"} {...register("email", {required: "The field is required"})}/>
            {errors.email && <div className={styles.error}>{errors.email.message}</div>}

            <input className={styles.writeInput} type={"password"} placeholder={"Password"} {...register("password", {required: "The field is required"})}/>
            {errors.password && <div className={styles.error}>{errors.password.message}</div>}
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.remember}>
                <input type={"checkbox"}/>
                <p>Remember me</p>
            </div>

            <p className={styles.forgot}>Forgot your password?</p>
            <input type={"submit"} value={"Login"} className={styles.button}/>
            <span>Not an account? <Link to={"/signup"}>Register</Link></span>
        </form>
    );
};

export default SignInForm;