import React, { useContext } from "react";
import Color from "./Color";
import { ColorContext } from "./../../index";

export default function ColorList() {
    const { colors } = useContext(ColorContext);
    if (!colors.length) return <div> No colors listed</div>;
    return (
        <div className="color-list">
            {colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}
