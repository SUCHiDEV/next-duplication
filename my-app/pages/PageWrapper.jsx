import { useEffect, useState } from "react";

const PageWrapper = () => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        setIndex(2);
    }, []);

    return index;
};