// "use client";

import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
// import Head from "next/head";
import Script from "next/script";
// import { usePathname, useRouter } from "next/navigation";
// import * as gtag from "../lib/gtag";
// import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Quick Appliance Repair | Home Appliance Repair Service",
  description:
    "Quick Appliances Repairs is a leading home appliance repair company in Dubai and Abu Dhabi. We offer repair services for Samsung, Bosch, Lg and Siemens appliances.",
  keywords: [
    "Bosch Service Center",
    "Lg Service Center",
    "Samsung Service Center",
    "Siemens Service Center",
    "Bosch Repair Center",
    "Lg Repair Center",
    "Samsung Repair Center",
    "Siemens Repair Center",
  ],
  creator: "cyhammad",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events?.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events?.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  // if (pathname.startsWith("/companies")) {
  //   return (
  //     <html
  //       lang="en"
  //       className="scroll-smooth"
  //       style={{ scrollBehavior: "smooth" }}
  //     >
  //       <body className={inter.className}>
  //         <Head>
  //           <title>
  //             Quick Appliance Repair | Home Appliance Repair Service
  //           </title>
  //         </Head>

  //         {children}
  //         <FixedCallButtons />
  //       </body>
  //     </html>
  //   );
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FixedCallButtons />
        <Footer />
      </body>
    </html>
  );
}
