import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const ColorContext = createContext();
export function useColors() {
    return useContext(ColorContext);
}
