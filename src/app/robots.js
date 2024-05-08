export default async function robots() {
    try {
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/robotTxt`);
        // console.log(response.ok, "from robot")
        if (!response.ok) {
            console.log('Failed to fetch robot.txt data|-------------------------------->>>>>');
        }
        const data = await response.json();
        // console.log(data)

        const { robotTxts } = data ?? {};

        console.log(robotTxts)
        if (robotTxts?.length > 0) {
            const formattedData = robotTxts?.map((singleRobot) => ({
                userAgent: singleRobot?.user_agent || '*',
                allow: [`${singleRobot?.allow}`] || ['/'],
                disallow: [`${singleRobot?.disallow}`] || ['/private/'],
            }));

            console.log({
                rules: formattedData?.length > 0 ? formattedData : null,
                sitemap: `${robotTxts[0]?.sitemap_url}sitemap.xml` || `https://readymixnearme.ca/sitempa.xml`,
            })

            return {
                rules: formattedData?.length > 0 ? formattedData : null,
                sitemap: `${robotTxts[0]?.sitemap_url}sitemap.xml` || `https://readymixnearme.ca/sitempa.xml`,
            }

            // return {
            //     rules: {
            //         userAgent: '*',
            //         allow: '/',
            //         disallow: '/private/',
            //     },
            //     sitemap: `https://readymixnearme.ca/sitempa.xml`,
            // }
        } else {

            return {
                rules: {
                    userAgent: '*',
                    allow:  ['/'],
                    disallow:  ['/private/'],
                },
                sitemap: `https://readymixnearme.ca/sitempa.xml`,
            };

        }
     

        // return {
        //     rules: {
        //         userAgent: '*',
        //         allow: '/',
        //         disallow: '/private/',
        //     },
        //     sitemap: `https://readymixnearme.ca/sitempa.xml`,
        // }



    } catch (error) {
        console.error("Error fetching robot.txt data:", error);
        return {
            rules: {
                userAgent: '*',
                allow:  ['/'],
                disallow:  ['/private/'],
            },
            sitemap: `https://readymixnearme.ca/sitempa.xml`,
        };
    }
}



// const staticRobot = {
//     rules: [
//         {
//             userAgent: '*',
//             allow: ['/'],
//             disallow: ['/private/'],
//         }
//     ],
//     sitemap: 'https://readymixnearme.ca/sitemap.xml',
// };

// export default async function robots() {
//     try {
//         // Fetch robot.txt data
//         const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/robotTxt`);

//         // Check if the response is successful
//         if (!response.ok) {
//             if (response.status === 404) {
//                 console.warn("robot.txt not found. Using static robot data.");
//             } else {
//                 console.error(`Failed to fetch robot.txt: ${response.status} ${response.statusText}`);
//             }
//         }

//         // Parse response data as JSON
//         const data = await response.json();

//         // console.log(data?.robotTxts, "robot datas");

//         // Check if robot.txt data is empty or missing
//         if (!data || !data.robotTxts || data.robotTxts.length === 0) {
//             console.warn("No robot.txt data found. Using static robot data.");
//             return staticRobot;
//         }

//          // Transform the data into desired format
//          const formattedData = data.robotTxts.map((robot) => ({
//             userAgent: robot.user_agent,
//             allow: [robot.allow],
//             disallow: [robot.disallow],
//         }));

//         // console.log(formattedData, "formatedData")
//         // console.log({rules: formattedData}, "ruels")
//         // console.log({rules: formattedData}, "ruels")
//         // console.log({rules: formattedData, sitemap:  `${data.robotTxts[0]?.sitemap_url}sitemap.xml`,}, "ruels and sitemap")

//         // Return the transformed data
//         // return {
//         //     rules: formattedData,
//         //     sitemap: `${data.robotTxts[0]?.sitemap_url}sitemap.xml`,
//         // };

//             return {
//               rules: [
//             {
//                 userAgent: '*',
//                 allow: ['/'],
//                 disallow: ['/private/'],
//             }
         
//         ],
//         sitemap: 'https://readymixnearme.ca/sitemap.xml',
//     }

//     } catch (error) {
//         console.error("Error fetching or parsing robot.txt data:", error.message);
//         // If error occurs, return the static robot
//         return staticRobot;
//     }
// }

// // export default function robots() {
// //     return {
// //         rules: [
// //             {
// //                 userAgent: '*',
// //                 allow: ['/'],
// //                 disallow: ['/private/'],
// //             },
         
// //         ],
// //         sitemap: 'https://readymixnearme.ca/sitemap.xml',
// //     }

// // [ { userAgent: '*', allow: [ '/' ], disallow: [ '/private/' ] } ] formatedData
// // { rules: [ { userAgent: '*', allow: [Array], disallow: [Array] } ] } ruels
// // { rules: [ { userAgent: '*', allow: [Array], disallow: [Array] } ] } ruels

// //   {
// //   rules: [ { userAgent: '*', allow: [Array], disallow: [Array] } ],
// //   sitemap: 'https://readymixnearme.ca/sitemap.xml'
// //    }
// // }