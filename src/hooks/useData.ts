import { useState, useEffect } from "react";
import { getData } from "../mockData/data.ts";

export function useData(type: string) {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getData(type);
                setItems(data as any[]);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        loadData().catch((err) => {
            setError(err as Error);
        });
    }, [type]);

    return { items, loading, error };
}