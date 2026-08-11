import * as React from "react";
import Navbar from "../components/Navbar/Navbar.tsx";

export const MainPage = (): React.ReactNode => {
    return (
        <main>
            <h1>Tournament Simulator</h1>
            <Navbar />
        </main>
    );
};