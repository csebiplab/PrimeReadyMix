
// Define a static robot object
const staticRobot = {
    rules: [
        { userAgent: '*', allow: '/', disallow: '/private/' }
    ],
    sitemap: 'https://readymixnearme.ca/'
};


export default async function robots() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/robotTxt`);
        const data = await response.json();

        const robotTxts = data?.robotTxts ?? [];

        const formattedData = robotTxts.map((singleRobot) => ({
            userAgent: singleRobot?.user_agent,
            allow: singleRobot?.allow,
            disallow: singleRobot?.disallow,
        }));

        // console.log(formattedData);

        return {
            rules: formattedData?.length > 0 ? formattedData : null,
            sitemap: robotTxts[0]?.sitemap_url,
        }

    } catch (error) {
        console.error("Error fetching robot.txt data:", error);
        // If error occurs, return the static robot
        return staticRobot;
    }
}
