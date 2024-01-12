import { useEffect, useState } from "react";

const useIsElementVisible = (target) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(onVisibilityChange);

        // Make sure target.current is an Element before calling observe
        if (target.current instanceof Element) {
            observer.observe(target.current);
        }

        return () => {
            // Cleanup the observer on unmount
            observer.disconnect();
        };
    }, [target]);

    const onVisibilityChange = (entries) => {
        setIsVisible(entries[0].isIntersecting);
    };

    return isVisible;
};

export default useIsElementVisible;
