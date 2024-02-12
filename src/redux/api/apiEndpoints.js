const endPoints = {
    base:
        process.env.NODE_ENV !== "production"
            ? process.env.NEXT_PUBLIC_LOCAL_API
            : process.env.NEXT_PUBLIC_LIVE_API,
    metadata: "/metadata",
    googleAnalytics: "/search-console",
    robotTxt: "/robotTxt",
    siteMap: "/siteMap",
};

export const { base, metadata, googleAnalytics, robotTxt, siteMap } = endPoints;
