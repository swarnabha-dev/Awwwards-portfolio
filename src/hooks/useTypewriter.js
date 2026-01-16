import { useState, useEffect } from 'react';

const useTypewriter = (words, interval = 3500) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words, interval]);
    return words[index];
};

export default useTypewriter;
