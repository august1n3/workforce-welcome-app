

import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
import { checkAuthentication } from "@/services/Authentication/fireAuth";


const encode_sans = Encode_Sans({ subsets: ["latin-ext"],weight:['100','200','300','500','400','600'] });

export const metadata: Metadata = {
  title: "WorkForce",
  description: "Platform for hiring and searching for opportuities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  
  

  return (
    <html lang="en">
      <body className={encode_sans.className} >
        
        {children}</body>

    </html>
  );
}
