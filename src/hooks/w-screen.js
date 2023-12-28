
import { useEffect, useState } from "react";
/**
*@description Hooks listener width screen
* */
export default function useWidthScreen() {
    const [widthWindow, setWidthWindow] = useState();

    useEffect(() => {
        const updateWindowWidth = () => {
            setWidthWindow(window.innerWidth);
        };

        window.addEventListener("resize", updateWindowWidth);

        updateWindowWidth();

        return () => {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    return widthWindow;
}