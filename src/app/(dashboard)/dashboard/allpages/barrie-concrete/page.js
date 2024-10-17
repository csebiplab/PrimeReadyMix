import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/barrie-concrete`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const page = async () => {

    const data = await getData()

    const editRoute = "dashboard/allpages/barrie-concrete/edit-barrie-concrete";
    const endPoints = "barrie-concrete";


    return (
        <>
            <ShareComponent
                editPath={editRoute}
                blogRouteAllMetaData={data?.data}
                endPoints={endPoints}
            />
        </>
    );
};

export default page;
