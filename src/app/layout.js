import { Montserrat } from "next/font/google";
import ProgressBar from "../components/common/ProgressBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Prime Ready Mix Concrete in Toronto",
    description:
        "When it comes to reliable and trusted ready mix services in Toronto, there is no better choice than Prime Ready Mix.",
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
        other: {
            me: ["my-email", "my-link"],
        },
    },
    // robots: {
    //     index: false,
    //     follow: true,
    //     nocache: true,
    //     googleBot: {
    //         index: true,
    //         follow: false,
    //         noimageindex: true,
    //         "max-video-preview": -1,
    //         "max-image-preview": "large",
    //         "max-snippet": -1,
    //     },
    // },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
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
