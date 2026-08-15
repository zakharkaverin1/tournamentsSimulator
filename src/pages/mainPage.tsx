import * as React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import { getData } from "../mockData/data.ts";

export const MainPage = () => {
    const [currentSection, setCurrentSection] = React.useState<string>("team");
    const [currentItems, setCurrentItems] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const items = await getData(currentSection) as any[];
            setCurrentItems(items);
            setLoading(false);
        };

        loadData();
    }, [currentSection]);

    return (
        <main>
            <h1>Tournament Simulator</h1>
            <Navbar onChange={setCurrentSection} />

            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <div>
                    {currentItems.map((item) => (
                        <div key={item.id}>
                            {item.name || `${item.firstName} ${item.lastName}`}
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};