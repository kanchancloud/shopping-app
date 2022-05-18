import {useContext} from "react";
import {createContext} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateCurrentUser
} from 'firebase/auth';
import {useEffect, useState} from "react";
import {auth} from './FirebaseConfig';


export const authContext = createContext();

export const LoginProvider = ({children}) => {
    const [AuthLong, setAuthLogin] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            return setAuthLogin(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <LoginProvider.Provider value={AuthLong}>
            {children}
        </LoginProvider.Provider>
    )
}

export function useAuthValue() {
    return useContext(authContext)
}

export default LoginProvider;