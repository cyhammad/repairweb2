import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quick Appliances Repair",
  description:
    "Quick Appliances Repair is an appliance repair company in Dubai and Abu Dhabi. We repair all major appliances including fridges, stoves, washers, dryers, dishwashers, and more. We offer same-day service and 24/7 repair service. Call us today to book your appointment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11230930704"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'AW-11230930704');
          `}
        </Script>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <FixedCallButtons />
        <Footer />
      </body>
    </html>
  );
}
