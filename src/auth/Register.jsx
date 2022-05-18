import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../FirebaseConfig';
import React from "react";



export const Register=() =>{
    const  history=useNavigate();
    const [email,setEmail]=useState();
    const [Password,setPassword]=useState();

    const registerHandler= async(e)=>{
        e.preventDefault();
        try{
            const user= await createUserWithEmailAndPassword(auth,
                email,
                Password);
            console.log(user);
            history('/')

        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <div>
            <form className="FormWrap">
                <h1>Register</h1>
                <label className="labelControl">email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                <label className="labelControl" >enter password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="ButtonControl" onClick={registerHandler} >submit</button>
                <p>login <Link to="/">login</Link></p>
            </form>
        </div>
    );
}
