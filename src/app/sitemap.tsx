

const sitemap = async () => {
    const changeFrequency = 'daily';


    const SiteMaps = [
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}profile/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}faqs/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}about-us/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}product/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}favourites/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}bags/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}my-order/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}find-undertone/`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        },
    ]


    return [...SiteMaps]
}

export default sitemap;