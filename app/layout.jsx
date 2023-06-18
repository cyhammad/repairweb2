import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quick Appliances Repair",
  description: "Quick Appliances Repair is a local appliance repair company in the GTA. We repair all major appliances including fridges, stoves, washers, dryers, dishwashers, and more. We offer same-day service and 24/7 emergency service. Call us today to book your appointment.",
};

export default function RootLayout({ children }) {
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
