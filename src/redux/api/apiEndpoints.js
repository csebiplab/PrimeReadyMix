const endPoints = {
    base:
        process.env.NODE_ENV !== "production"
            ? process.env.NEXT_PUBLIC_LOCAL_API
            : process.env.NEXT_PUBLIC_LIVE_API,
    metadata: "/metadata",
};

export const { base, metadata } = endPoints;
