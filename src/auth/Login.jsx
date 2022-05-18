import React, {useEffect, useState} from 'react';
import './auth.css';
import {signInWithEmailAndPassword}  from 'firebase/auth';
import {auth} from "../FirebaseConfig";
import { Link, useNavigate } from 'react-router-dom'
import {setLoginStatus} from "../redux/action/Action";
import {useDispatch, useSelector} from "react-redux";


export const Login=() =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useNavigate();
    const dispatch = useDispatch();
    const loggedInStatus = useSelector((state) => state.userReducer.loggedIn)

    useEffect(() => {
        if(loggedInStatus == true) {
            history("/HomePage")
        }
    }, [loggedInStatus])

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth,
                email,
                password);
            console.log("here", user)
            if(user) {
                dispatch(setLoginStatus(true))
            }

            console.log(user)
        } catch (error) {
            console.log(error.message)
            alert("please enter current email and password")
        }
        // [history]
    };

    return (
        <div>
            <form className="FormWrap">
                <h1>Login</h1>
                <label className="labelControl">email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                <label className="labelControl" >enter password</label>
                <input type="password"  className={"inputControl"} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="ButtonControl" onClick={loginHandler} >submit</button>
                <p>not registered yet? <Link to="/Register">sign up</Link></p>
            </form>
        </div>
    );
}

