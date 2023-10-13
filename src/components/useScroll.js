import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.25 });

    useEffect(() => {
        if (view) {
            controls.start('show');
        } else {
            controls.start('hidden');
        }
    }, [element, controls, view]); // I also added 'view' to the dependency array

    return [element, controls]; // This is the missing return statement
};
