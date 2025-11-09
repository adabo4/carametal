export default function sitemap() {
    const baseUrl = "https://carametal.sk"

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/o-nas`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projekty`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/sluzby`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/kariera`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/gdpr`,
            lastModified: new Date(),
        },
    ]
}
