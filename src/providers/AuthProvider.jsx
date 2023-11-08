import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import app from "../config/firebase.config";
import { useAxios } from "../hooks/useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tokenState, setTokenState] = useState(false);
    const axios = useAxios();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user in the auth state changed", currentUser);
            if (currentUser && !tokenState) {
                axios
                    .post(
                        "/get-token",
                        { email: currentUser.email },
                        { withCredentials: true }
                    )
                    .then((res) => {
                        console.log(
                            `Token set response ${JSON.stringify(res.data)}`
                        );
                        setTokenState(true);
                    });
            }
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUser = (user, displayName, photoURL) => {
        setLoading(true);
        return updateProfile(user, { displayName, photoURL });
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser,
        googleSignIn,
        setTokenState,
        tokenState,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
