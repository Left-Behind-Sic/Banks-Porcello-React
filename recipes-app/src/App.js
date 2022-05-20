import React from "react";
import ColorList from "./components/color/ColorList";
import AddColorForm from "./components/AddColorForm";

export default function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}
