import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";



async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/barrie-concrete/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page = async ({ params }) => {
  const { id } = params;


  const data = await getData(id)


  const endPoints = "barrie-concrete";


  const { title, description, keywords } = data?.data ?? {}
  return (
    <ShareComponent
      id={id}
      titleValue={title}
      descriptionValue={description}
      keywordsValue={keywords}
      endPoints={endPoints}
    />
  );
};

export default page;
