import { useState, useLayoutEffect } from "react";

export const useMousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setPosition = ({ x, y }) => {
        setX(x);
        setY(y);
    };

    useLayoutEffect(() => {
        window.addEventListener("mouseMove", setPosition);
        return () => {
            window.removeEventListener("mouseMove", setPosition);
        };
    }, []);

    return [x, y];
};
