import { useEffect, useState } from "react";

async function fetchUrl(url: string) {
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}
export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUrl(url)
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}
