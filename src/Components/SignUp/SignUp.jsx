import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../Redux/Reducers/UserReducer";
import {useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSignUpSubmit = (data) => {
        const auth = getAuth();
        const {email, password} = data;

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate("/men");
            })
            .catch(console.error)
    }

    return <SignUpForm onSignUpSubmit={onSignUpSubmit}/>
};

export default SignUp;