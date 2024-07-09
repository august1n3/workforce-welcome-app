"use client"
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import "./style.css";
import { useState } from "react";
import signUpWithEmail, { checkAuthentication, getUserID } from "@/services/Authentication/fireAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [Fullname, setFullname] = useState('');
  const [ Email, setEmail] = useState('');
  const [ Phonenumber, setPhonenumber] = useState('');
  const [ Password, setPassword] = useState('');
  const [ user, setUser] = useState(false);
  const router = useRouter();
  
  checkAuthentication(setUser, user);
  if(user){
    router.push("https://workforce-workfrce.vercel.app")
  }
  
   

  

  const signUpEmployee = () =>{
    try{
      signUpWithEmail(Email, Password, Fullname, Phonenumber);
     
    }catch(e){
      
    }
  
  }
  return (
    <div>
      <div className="header">
      <Link href='./'><Image
            src='/brandlogo.svg'
            alt=''
            width={224}
            height={47}
            className="logo"
          /></Link>
          <Link href='/signin' className="signInButton">
            Sign In  
          </Link>
      </div>
      <div className="main">
      <div className="signup-section">
        <div className="heading">
            <h1>Welcome to </h1>
            <h1 className="brandname">WorkForce,</h1>
        </div>
        <p className="sub-heading">Hop on the Job Carousel - Fun Hiring Ahead!</p>
        <form method="POST">
            <div className="single-fields">
              <input 
              type="text" 
              name="Fullname" 
              placeholder="Enter Full name"
              value={Fullname}
            onChange={(e) => {setFullname(e.target.value)}}
              /></div>
            <div className="row-fields">
            <div><input 
            type="email" 
            name="Email" 
            placeholder="Enter a valid email"
            value={Email}
            onChange={(e) => {setEmail(e.target.value)}}
            /></div>
            <div>
              <input 
              type="tel" 
              name="PhoneNumber"
              placeholder="Enter a valid phone number"
              value={Phonenumber}
              onChange={(e) => {setPhonenumber(e.target.value)}}
              /></div>
            </div>
            <div className="row-fields">
            <div><input 
            type="password" 
            name="Passowrd" 
            placeholder="Enter password"
            value={Password}
            onChange={(e) => {setPassword(e.target.value)}}
            /></div>
            <div><input type="password" name="Confirmpassword" placeholder="Confirm password"/></div>
            </div>
            <button type="submit" onClick={signUpEmployee}>Register now!</button>
        </form>
       </div>
      </div>
    </div>
  );
}
