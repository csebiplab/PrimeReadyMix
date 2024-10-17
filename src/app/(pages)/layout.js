import { Montserrat } from "next/font/google";
import ProgressBar from "../../components/common/ProgressBar";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
// import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";


export async function generateMetadata() {
    try {
        // Fetch metadata for the home route
        const metaDataResponse = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/home`);
        const metaData = await metaDataResponse.json();

        // Fetch Google site verification URL
        const googleVerificationResponse = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/verificationUrl`);
        const googleVerification = await googleVerificationResponse.json();

        // Extract Google console key from the meta tag content
        const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

        return {
            title: metaData?.homeRouteAllMetaData[0]?.title,
            description: metaData?.homeRouteAllMetaData[0]?.description,
            keywords: metaData?.homeRouteAllMetaData[0]?.keywords,
            verification: {
                google: googleConsoleKey,
            }
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        throw error;
    }
}

function extractGoogleConsoleKey(googleVerification) {
    try {
        const { verificationUrl } = googleVerification ?? {};
        const metaTagContent = verificationUrl[0]?.title;
        const consoleKey = metaTagContent.split(" ")[2]?.split("=")[1]?.slice(1, -1);
        return consoleKey;
    } catch (error) {
        console.error('Error extracting Google console key:', error);
        throw error;
    }
}


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
