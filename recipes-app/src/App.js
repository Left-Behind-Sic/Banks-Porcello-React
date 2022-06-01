import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import ColorList from "./components/color/ColorList";
import AddColorForm from "./components/AddColorForm";
import Checkbox from "./components/Checkbox";
import { useAnyKeyToRender } from "./hooks/useAnyKeyToRender";
import User from "./components/User";
import Cats from "./components/Cats";
import GitHubUser from "./components/GitHubUser";
import TahoePeaks from "./components/tahoePeaks";

export default function App() {
    return (
        <>
            <div>ready</div>
            {/* <Cats /> */}
            <GitHubUser />
            {/* <TahoePeaks /> */}
            {/* <Checkbox /> */}
            {/* <User /> */}
            {/* <AddColorForm />
            <ColorList /> */}
        </>
    );
}
