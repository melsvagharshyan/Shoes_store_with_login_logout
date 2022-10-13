import styles from './SignUpForm.module.scss';
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const SignUpForm = (props) => {
    const {onSignUpSubmit} = props;

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitSuccessful
        }
    } = useForm({mode: "onSubmit"});

    useEffect(()=>{
        reset();
    }, [isSubmitSuccessful])


    return (
        <form className={styles.signUp} onSubmit={handleSubmit(onSignUpSubmit)}>
            <h1 className={styles.signUpText}>Sign up</h1>
            <input className={styles.writeInput} type={"email"} placeholder={"Email"} {...register("email", {
                required: "This field is required!",
                minLength: {
                    value: 12,
                    message: "Minimum 12 letters"
                }
            })}/>
            {errors.email && <div className={styles.error}>{errors.email.message}</div>}

            <input className={styles.writeInput} type={"password"} placeholder={"Password"} {...register("password", {
                required: "This field is required!",
                minLength: {
                    value: 10,
                    message: "Minimum 10 letters"
                }
            })}/>
            {errors.password && <div className={styles.error}>{errors.password.message}</div>}

            <input type={"submit"} value={"Create Account"} className={styles.button}/>
            <span>Already have an account?<Link to={"/signin"}>Sign In</Link></span>
        </form>
    );
};

export default SignUpForm;