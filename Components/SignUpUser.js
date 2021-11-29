import React from 'react'
import { app, db } from './FirebaseConfig';
import { useState, useEffect } from 'react'
import { collection, setDoc, query, where, onSnapshot } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const SignUpUser=()=>{
    const fname = document.getElementById("normal_login_firstname").value
    const lname = document.getElementById("normal_login_lastname").value
    const username = document.getElementById("normal_login_username").value
    const email = document.getElementById("normal_login_Email").value
    const password = document.getElementById("normal_login_password").value
    const dob = document.getElementById("dob").value

setDoc(doc(db, "Accounts",email), {
"user":{
fname,
lname,
username,
email,
password,
dob
} 

});
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
alert("Your Account Is Created")
const user = userCredential.user;

})
.catch((error) => {
alert("An Error Occured")
const errorCode = error.code;
const errorMessage = error.message;
// ..
});
 
}

export {SignUpUser}