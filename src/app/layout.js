import { Inter } from "next/font/google";
import ProgressBar from "../components/common/ProgressBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ready Mix",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ProgressBar />
                <Header />
                {children}
                <Footer />
                <Script
                    src="https://kit.fontawesome.com/d63d7fa193.js"
                    crossOrigin="anonymous"
                ></Script>
            </body>
        </html>
    );
}
