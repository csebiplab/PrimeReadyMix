import { Montserrat } from "next/font/google";
import ProgressBar from "../components/common/ProgressBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Ready Mix Concrete & Concrete Delivery, Toronto Ready Mix",
    description:
        "When it comes to reliable and trusted ready mix concrete services in Toronto, there is no better choice than Prime Ready Mix",
    verification: {
        google: "iok2m8F7C2fwqS7xL0sbkyGBauyiAFagM_QUNClJC18",
        yandex: "yandex",
        yahoo: "yahoo",
        other: {
            me: ["my-email", "my-link"],
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ProgressBar />
                <Header />
                <GoogleAnalytics />
                {children}
                <Footer />
                <Script src="https://kit.fontawesome.com/d63d7fa193.js"></Script>
            </body>
        </html>
    );
}
