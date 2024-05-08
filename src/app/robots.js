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

        if (!response.ok) {
            throw new Error(`Failed to fetch robot.txt: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        console.log(data?.robotTxts, "robot datas");

        if (!data || !data.robotTxts || data.robotTxts.length === 0) {
            console.warn("No robot.txt data found. Using static robot data.");
            return staticRobot;
        }

        const formattedData = data.robotTxts.map((singleRobot) => ({
            userAgent: singleRobot.user_agent,
            allow: singleRobot.allow,
            disallow: singleRobot.disallow,
        }));

        return {
            rules: formattedData.length > 0 ? formattedData : null,
            sitemap: data.robotTxts[0]?.sitemap_url,
        }

    } catch (error) {
        console.error("Error fetching or parsing robot.txt data:", error.message);
        return staticRobot;
    }
}
