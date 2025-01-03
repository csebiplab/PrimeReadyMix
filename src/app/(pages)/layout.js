import { Montserrat } from "next/font/google";
import ProgressBar from "../../components/common/ProgressBar";
import Header from "../../components/layout/Header";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense>
          <ProgressBar />
        </Suspense>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
