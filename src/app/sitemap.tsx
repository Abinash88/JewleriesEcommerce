import { fetchGetRequest } from "@/Components/lib/Helper";
import { NavBarDataTypes } from "@/DataSource/Types";


const sitemap = async () => {
    const changeFrequency = 'daily';

    const fetchData: NavBarDataTypes[] = await fetchGetRequest({ endpoint: `api/menu-items/` })
    const nav = fetchData?.map((item, index) => {
        return {
            url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}${item?.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 0.8,
        }
    })


    const department = fetchData?.map((item, index) => {
        if (item?.slug === "departments") {
            return item?.child_navs?.map((subitem, index) => {
                return {
                    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}departments/${subitem.slug}`,
                    lastModified: new Date().toISOString(),
                    changeFrequency,
                    priority: 0.8,
                }
            })
        }
    }).filter((item, _) => item)[0];

    const services = fetchData?.map((item, index) => {
        if (item?.slug === "services") {
            return item?.child_navs?.map((subitem, index) => {
                return {
                    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}services/${subitem.slug}`,
                    lastModified: new Date().toISOString(),
                    changeFrequency,
                    priority: 0.8,
                }
            })
        }
        
    }).filter((item, _) => item)[0];

    if (department && services)

        return [{
            url: process.env.NEXT_PUBLIC_SITEMAP_URL,
            lastModified: new Date().toISOString(),
            changeFrequency,
            priority: 1,
        }, ...nav, ...department, ...services,
        ]
}

export default sitemap;