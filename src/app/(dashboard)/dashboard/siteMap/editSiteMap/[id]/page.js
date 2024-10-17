import SiteMapComponent from "@/components/Dashboard/SiteMap/SiteMapComponent";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/siteMap/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const page = async ({ params }) => {
  const { id } = params;


  const data = await getData(id)

  // console.log("data from", data)


  const { sitemapData } = data ?? {}
  const { title, url } = sitemapData ?? {}

  return <SiteMapComponent id={id} titleValue={title} urlValue={url} />;
};

export default page;


