import { Montserrat } from "next/font/google";
import ProgressBar from "../components/common/ProgressBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
import StoreProvider from "../redux/storeProvider";
import { allMetadata, rootMetadata } from "../helpers/robotTxtHelper";
import axios from "axios";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/metadata", {
      cache: "no-store",
    });
    const getHomePageMetaData = data?.RouteAllMetaData[0];
    const { title, description, keywords } =
      getHomePageMetaData?.homePage || {};
    return {
      metadataBase: new URL("https://readymixnearme.ca/"),
      title: {
        default: title,
        temalate: `%s | ${title}`,
      },
      description: description,
      keywords: keywords,
      // verification: {
      //   google: "google-site-verification=878787878",
      // },
    };
  } catch (error) {
    console.log(error);
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <ProgressBar />
          <Header />
          <GoogleAnalytics />
          {children}
          <Footer />
        </StoreProvider>
        <Script src="https://kit.fontawesome.com/d63d7fa193.js"></Script>
      </body>
    </html>
  );
}
