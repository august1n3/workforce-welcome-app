"use client"
import { auth } from '@/services/Authentication/fireAuth';
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';



export function checkAuthentication(setUser: unknown, user: boolean) {
    var isUserSigned: boolean = false;
    auth.onAuthStateChanged((user) => {
        if (user != null) {
            isUserSigned = true;
            console.log(isUserSigned);
            return isUserSigned;
        } else {
            isUserSigned = false;
            console.log(isUserSigned);
            return isUserSigned;
        }
    })
    return isUserSigned;
}