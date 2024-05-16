import TagList from "@/components/Dashboard/blogs/TagList/TagList";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_LIVE_API + '/api/blogTag', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function page() {

  const data = await getData()


  return (
    <div>
      <TagList allTaglist={data?.blogTags} />
    </div>
  );
}
