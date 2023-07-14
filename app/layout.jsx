'use client';

import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
import Head from "next/head";
import Script from "next/script";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log("Pathname", pathname);
  if (pathname.startsWith("/companies")) {
    return (
      <html lang="en" className="scroll-smooth" style={{scrollBehavior: "smooth"}}>
        <body className={inter.className}>
          <Head>
            <Script
              id="google-analytics"
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-11230930704"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'AW-11230930704');
          `,
              }}
            />
            <title>Quick Appliance Repair | Home Appliance Repair Service</title>
          </Head>
          {children}
          <FixedCallButtons />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <Script
            id="google-analytics"
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11230930704"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'AW-11230930704');
          `,
            }}
          />
        </Head>
        <Header />
        {children}
        <FixedCallButtons />
        <Footer />
      </body>
    </html>
  );
}
