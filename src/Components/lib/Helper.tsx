import { twMerge } from "tailwind-merge";

export const Cn = (classes: string) => {
    return twMerge(classes)
}


export const fetchGetRequest = async ({ endpoint }: { endpoint: string }) => {
    try {
        const getRes = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache:'no-cache',
            // next: { revalidate: 20 }
        });

        const data = await getRes.json();
        return data;
    } catch (err: unknown) {
        console.log(err);
    }
}

export const fetchPostRequest = async <T,>({ endpoint, data }: { endpoint: string, data: T }) => {
    try {
        const getRes = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        const result = await getRes.json();
        return result;
    } catch (err) {
        console.log(err)
    }
}


export const HtmlToText = (html: string | undefined) => {
    if (html)
        return (<div className="w-full iframe_container h-full" style={{lineHeight:"155%"}} dangerouslySetInnerHTML={{ __html: html }} />)
}

export const ChangeToRealDate = (dates: string) => {
    if (dates) {
        const newDate = new Date(dates);
        const customDate = new Date(newDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        }))
        const originalDate = new Date(customDate);
        originalDate.setHours(0, 0, 0, 0);
        const formated = originalDate.toDateString();
        return formated;
    }
}

