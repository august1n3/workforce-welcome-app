"use client"

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { checkAuthentication } from "@/services/Authentication/fireAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const [ user, setUser] = useState(false);
  const router = useRouter();
  
  checkAuthentication(setUser, user);

  if(user){
    router.push("https://workforce-workfrce.vercel.app")
  }

  return (
    <div>
      <div className="header">
          <Image
            src='/brandlogo.svg'
            alt=''
            width={224}
            height={47}
            className="logo"
          />
          <Link href='https://workfrce.vercel.app/login' className="signInButton">
            Sign In  
          </Link>
      </div>
      <div className="main">
        <div className="heading-section">
          <div className="heading">
           <h1>Welcome to </h1>
           <h1 className="brandname">WorkForce,</h1>
          </div>
          <p className="sub-heading">Hop on the Job Carousel - Fun Hiring Ahead!</p>
        </div>
        <div className="hero-section">
            <p className="text">The hiring platform that makes finding the perfect job and hiring easy,</p>
            <Image
              src='/heroicon.svg'
              alt=''
              height={140}
              width={120}
            />
        </div>
        <div className="getstarted-buttons">
          
          <Link href='/signupemployee' className="purple-buttons">I am an <b>Employee</b> seeking opportunities</Link>
          <Link href='signupemployer' className="blue-buttons">I am an <b>Employer</b> seeking professionals</Link>
        </div>
      </div>
    </div>
  );
}
