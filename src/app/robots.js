// // Define a static robot object
// const staticRobot = {
//     rules: [
//         { userAgent: '*', allow: '/', disallow: '/private/' }
//     ],
//     sitemap: 'https://readymixnearme.ca/'
// };

// export default async function robots() {
//     try {
//         // Fetch robot.txt data
//         const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/robotTxt`);

//         // Check if the response is successful
//         if (!response.ok) {
//             if (response.status === 404) {
//                 console.warn("robot.txt not found. Using static robot data.");
//                 return staticRobot;
//             } else {
//                 console.error(`Failed to fetch robot.txt: ${response.status} ${response.statusText}`);
//                 return staticRobot;
//             }
//         }

//         // Parse response data as JSON
//         const data = await response.json();

//         console.log(data?.robotTxts, "robot datas");

//         // Check if robot.txt data is empty or missing
//         if (!data || !data.robotTxts || data.robotTxts.length === 0) {
//             console.warn("No robot.txt data found. Using static robot data.");
//             return staticRobot;
//         }

//         // Format the robot.txt data
//         const formattedData = data.robotTxts.map((singleRobot) => ({
//             userAgent: singleRobot.user_agent,
//             allow: singleRobot.allow,
//             disallow: singleRobot.disallow + singleRobot.createdAt,
//         }));

//         // Return formatted robot.txt data
//         return {
//             rules: formattedData.length > 0 ? formattedData : null,
//             sitemap: data.robotTxts[0]?.sitemap_url,
//         }

//     } catch (error) {
//         console.error("Error fetching or parsing robot.txt data:", error.message);
//         // If error occurs, return the static robot
//         return staticRobot;
//     }
// }

export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/private/'],
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                disallow: ['/'],
            },
        ],
        sitemap: 'https://acme.com/sitemap.xml',
    }
}