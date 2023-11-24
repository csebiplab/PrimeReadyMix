import axios from "axios";
import Services from "./RC";

export const metadata = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/metadata", {
      cache: "no-store",
    });
    const getHomePageMetaData = data?.RouteAllMetaData[0];
    const { title, description, keywords } =
      getHomePageMetaData?.concrete_delivery || {};
    return {
      title: title,
      description: description,
      keywords: keywords,
    };
  } catch (error) {
    console.log(error);
  }
};
export default function () {
  return <Services />;
}
