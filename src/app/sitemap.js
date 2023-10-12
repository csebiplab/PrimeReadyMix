export default function sitemap() {
    return [
        {
            url: "https://readymixnearme.ca",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://readymixnearme.ca/concrete-delivery",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
