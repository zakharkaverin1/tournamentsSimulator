import * as React from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import Button from "../components/Button/Button.tsx";
import Modal from "../components/Modal/Modal.tsx";
import AddForm from "../components/AddForm/AddForm.tsx";
import { useData } from "../hooks/useData";
import List from "../components/List/List.tsx";

export const MainPage = () => {
    const [currentType, setCurrentType] = React.useState<string>("team");
    const [addModalOpen, setAddModalOpen] = React.useState<boolean>(false);
    const { items: currentItems, loading, error } = useData(currentType);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <main>
            <h1>Tournament Simulator</h1>
            <Navbar onChange={setCurrentType} />

            <Modal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)}>
                <AddForm addType={currentType} />
            </Modal>

            {loading ? (
                <div>loading...</div>
            ) : (
                <>
                    <List type={currentType} items={currentItems} />
                    <Button onClick={() => setAddModalOpen(true)}>
                        +
                    </Button>
                </>
            )}
        </main>
    );
};