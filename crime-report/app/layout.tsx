import type { Metadata } from "next";
import {Inter} from 'next/font/google';
import './globals.css';

import React from "react";
import Navbar from "@/components/Navbar";
// import  navbar here
// import providers here

const inter = Inter({subsets: ['latin']});
 export const metadata: Metadata = {
  title: "Safe Report - Anonymously report crimes",
  description: "Securely report crimes without revealing your identity"
       
}
export default function RootLayout({
  children,
}:{children:React.ReactNode;}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative min-h-screen bg-black selection:bg-sky-500/20'>
            {/* gradient background*/}
            <div className="fixed inset-0 -z-10 min-h-screen">

              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]"/>
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_50%)]"/>

            </div>
            {/* navbar */}
            <Navbar/>
            <main className="pt-16">{children} </main>
        </div>
      </body>

    </html>
  )
}