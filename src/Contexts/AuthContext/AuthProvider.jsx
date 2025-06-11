import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const  [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
            loading,
            user,
            createUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;