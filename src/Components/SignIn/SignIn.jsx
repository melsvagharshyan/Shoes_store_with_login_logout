import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setUser} from "../../Redux/Reducers/UserReducer";
import {useNavigate} from "react-router-dom";
import SignInForm from "./SignInForm/SignInForm";



const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const onLoginSubmit = (data) => {
        const auth = getAuth();
        const {email, password} = data;

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate("/men");
            })
            .catch(() => {
                setError("Invalid Email or Password !");
            })
    }


    return <SignInForm onLoginSubmit={onLoginSubmit} error={error}/>


};

export default SignIn;