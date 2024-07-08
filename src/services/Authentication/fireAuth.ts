import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebaseInit';
import { addNewUserToDB } from '../Database/firebaseDB';
import { NextResponse } from 'next/server';
import { Dispatch, SetStateAction } from 'react';

const auth = getAuth(firebaseApp);

export function signOutUser() {
    signOut(auth).then(() => {

        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

export function getUserID()  {
   return auth.currentUser?.uid;
}

export default function signUpWithEmail(email: string,password: string, Companyname: string, Phonenumber: string ){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user.uid);
        addNewUserToDB(user.uid, Companyname, Phonenumber, email);
       
        // ...
      })
      .catch((error) => {
        var errorMessage: string;
        const errorCode = error.code;
        errorMessage = error.message;
        console.log(errorMessage);
        
        // ..
      });
}

export function checkAuthentication(useState: Dispatch<SetStateAction<boolean>>, user: any) {
    var isUserSigned: boolean = false;
    auth.onAuthStateChanged((user) => {
        if (user != null) {
            isUserSigned = true;
            useState(true);
            console.log(user.uid);
            console.log(isUserSigned);
            
            return NextResponse.redirect('https://workforce-workfrce.vercel.app');
        } else {
            isUserSigned = false;
           
            return isUserSigned;
        }
    })
    return isUserSigned;
}

export{auth}